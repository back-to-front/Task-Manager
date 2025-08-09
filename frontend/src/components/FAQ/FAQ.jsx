import { useState } from "react";
import "./FAQ.css";

const FAQ = ({ faqs }) => {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState({});

  // Toggle the open state of an FAQ item
  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id='faq' className='faq-container'>
      <h2 className='faq-title'>Frequently Asked Questions</h2>
      <div className='faq-items'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openItems[index] ? "open" : ""}`}
          >
            <div className='faq-question' onClick={() => toggleItem(index)}>
              <span>{faq.question}</span>
              <span className='faq-icon'>{openItems[index] ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${openItems[index] ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
