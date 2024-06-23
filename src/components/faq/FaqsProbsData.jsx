import FAQ from "./FaqsProbsAccept";

function FAQComponent() {
  const faqs = [
    {
      question: "What are the working hours?",
      answer: "Our working hours are from 8:00 AM to 6:00 PM every day.",
    },
    {
      question: "Do you provide services in my area?",
      answer: "We provide services within a 50 km radius from our main office.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The duration of a project depends on its complexity. Typically, it ranges from a few days to several weeks.",
    },
    {
      question: "Can I customize the service?",
      answer:
        "Yes, you can customize the service according to your requirements.",
    },
    {
      question: "Is there a minimum service charge?",
      answer: "Yes, the minimum service charge is $100.",
    },
    {
      question: "What are the service charges?",
      answer:
        "Service charges vary depending on the type of service. Please contact us for detailed pricing.",
    },
    {
      question: "How to request a service?",
      answer:
        'To request a service, go to our Service Request page: <a href="https://example.com/service-request">Click Here</a>',
    },
  ];

  return (
    <div>
      <FAQ faqs={faqs} />
    </div>
  );
}

export default FAQComponent;
