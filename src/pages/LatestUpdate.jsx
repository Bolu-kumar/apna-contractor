import { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { getDatabase, ref, onValue } from "firebase/database";
import { useQuery } from "react-query";
import Breadcrumb from "../components/header/Breacrumb";

const fetchUpdateContent = async () => {
  const updateRef = ref(getDatabase(), "updateInfo");
  return new Promise((resolve, reject) => {
    onValue(updateRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject("No data available");
      }
    });
  });
};

const LatestUpdated = () => {
  const [content, setContent] = useState({
    heading: "Upcoming Updates",
    paragraph: "Stay tuned for the latest education news and updates.",
    imageUrl: "img/Services/construction.png",
  });

  const { data, error, isLoading } = useQuery(
    "updateContent",
    fetchUpdateContent,
    {
      initialData: () => {
        const savedContent = localStorage.getItem("updateContent");
        return savedContent ? JSON.parse(savedContent) : content;
      },
      staleTime: 60000,
      cacheTime: 300000,
      onSuccess: (data) => {
        localStorage.setItem("updateContent", JSON.stringify(data));
      },
    }
  );

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Update", path: "/update", active: true },
  ];

  const breakIntoList = (paragraph) => {
    // Split paragraph into sentences based on a period followed by a space or end of string
    return paragraph.split(/\. (?=[A-Z])|\.?$/).filter(Boolean);
  };

  if (isLoading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error loading content: {error}</Alert>
      </Container>
    );
  }

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Latest-Update
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        <Container>
          <h1>{content.heading}</h1>
          <ul>
            {breakIntoList(content.paragraph).map((sentence, index) => (
              <li key={index} className="py-2">
                {sentence}
              </li>
            ))}
          </ul>
          {content.imageUrl && (
            <img
              src={content.imageUrl}
              alt="Update Info"
              className="img-fluid"
            />
          )}
        </Container>
      </div>
    </div>
  );
};

export default LatestUpdated;
