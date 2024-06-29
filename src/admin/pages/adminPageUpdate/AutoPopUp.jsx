// import { useState, useEffect } from "react";
// import { ref, onValue, set } from "firebase/database";
// import { db } from "../../../firebaseConfig/firebaseConfig";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const AutoPopUpPage = () => {
//   const [autoPopUpContent, setAutoPopUpContent] = useState({
//     title: "",
//     message: "",
//     clientUrl: "",
//     candidatesUrl: "",
//     imageUrl: "",
//   });

//   useEffect(() => {
//     fetchAutoPopUpContent();
//   }, []);

//   const fetchAutoPopUpContent = async () => {
//     const autoPopUpPageRef = ref(db, "autoPopUpPage");
//     onValue(autoPopUpPageRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setAutoPopUpContent(data);
//       }
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAutoPopUpContent({ ...autoPopUpContent, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const autoPopUpPageRef = ref(db, "autoPopUpPage");
//     set(autoPopUpPageRef, autoPopUpContent)
//       .then(() => {
//         alert("AutoPopUpPage content updated successfully!");
//       })
//       .catch((error) => {
//         alert("Failed to update content: " + error.message);
//       });
//   };

//   return (
//     <Container>
//       <h2 className="text-black mt-4">Admin - AutoPopUp Page</h2>
//       <Form onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formtitle">
//             <Form.Label className="text-dark">title</Form.Label>
//             <Form.Control
//               type="text"
//               name="title"
//               value={autoPopUpContent.title}
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Row>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formmessage">
//             <Form.Label className="text-dark">message</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="message"
//               value={autoPopUpContent.message}
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Row>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formImageUrl">
//             <Form.Label className="text-dark">Image URL</Form.Label>
//             <Form.Control
//               type="text"
//               name="imageUrl"
//               value={autoPopUpContent.imageUrl}
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Row>

//         <Button variant="primary" type="submit">
//           Update AutoPopUpPage Content
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default AutoPopUpPage;

import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AutoPopUpPage = () => {
  const [autoPopUpContent, setAutoPopUpContent] = useState({
    title: "",
    message: "",
    clientUrl: "",
    candidatesUrl: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchAutoPopUpContent();
  }, []);

  const fetchAutoPopUpContent = async () => {
    const autoPopUpPageRef = ref(db, "autoPopUpPage");
    onValue(autoPopUpPageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAutoPopUpContent(data);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAutoPopUpContent({ ...autoPopUpContent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autoPopUpPageRef = ref(db, "autoPopUpPage");
    set(autoPopUpPageRef, autoPopUpContent)
      .then(() => {
        alert("AutoPopUpPage content updated successfully!");
      })
      .catch((error) => {
        alert("Failed to update content: " + error.message);
      });
  };

  return (
    <Container>
      <h2 className="text-black mt-4">Admin - AutoPopUp Page</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formtitle">
            <Form.Label className="text-dark">title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={autoPopUpContent.title}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formmessage">
            <Form.Label className="text-dark">message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={autoPopUpContent.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formClientUrl">
            <Form.Label className="text-dark">Client URL</Form.Label>
            <Form.Control
              type="text"
              name="clientUrl"
              value={autoPopUpContent.clientUrl}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCandidatesUrl">
            <Form.Label className="text-dark">Candidates URL</Form.Label>
            <Form.Control
              type="text"
              name="candidatesUrl"
              value={autoPopUpContent.candidatesUrl}
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
              value={autoPopUpContent.imageUrl}
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

export default AutoPopUpPage;
