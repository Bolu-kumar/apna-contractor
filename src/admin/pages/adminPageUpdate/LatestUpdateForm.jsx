import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LatestUpdatedPageForm = () => {
  const [aboutUsContent, setAboutUsContent] = useState({
    heading: "",
    paragraph: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchAboutUsContent();
  }, []);

  const fetchAboutUsContent = async () => {
    const aboutUsRef = ref(db, "updateInfo");
    onValue(aboutUsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAboutUsContent(data);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutUsContent({ ...aboutUsContent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const aboutUsRef = ref(db, "updateInfo");
    set(aboutUsRef, aboutUsContent)
      .then(() => {
        alert("About Us content updated successfully!");
      })
      .catch((error) => {
        alert("Failed to update content: " + error.message);
      });
  };

  return (
    <Container>
      <h2 className="text-black mt-4">Admin - Latest-Update</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formHeading">
            <Form.Label className="text-dark">Heading</Form.Label>
            <Form.Control
              type="text"
              name="heading"
              value={aboutUsContent.heading}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formParagraph">
            <Form.Label className="text-dark">Paragraph</Form.Label>
            <Form.Control
              as="textarea"
              name="paragraph"
              value={aboutUsContent.paragraph}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formImageUrl">
            <Form.Label className="text-dark">Image URL</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              value={aboutUsContent.imageUrl}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LatestUpdatedPageForm;
