import "./CTASection.css";
import { useNavigate } from "react-router";

function CTASection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <section className='cta-section'>
      <div className='container'>
        <div className='cta-content'>
          <h2>Ready to Get Organized?</h2>
          <p>
            Join thousands of users who have transformed their productivity with
            Task Manager.
          </p>
          <button
            className='cta-button primary large'
            onClick={handleGetStarted}
          >
            Start Managing Tasks Now
          </button>
          <p className='cta-note'>
            No signup required • Free forever • Start immediately
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
