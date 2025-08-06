import "./HeroSection.css";
import { useNavigate } from "react-router";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          Organize Your Life with{" "}
          <span className='brand-highlight'>Task Manager</span>
        </h1>
        <p className='hero-subtitle'>
          The simple, powerful way to manage your daily tasks and boost
          productivity. Stay organized, meet deadlines, and achieve your goals.
        </p>
        <div className='hero-buttons'>
          <button className='cta-button primary' onClick={handleGetStarted}>
            Get Started Free
          </button>
          <button className='cta-button secondary'>Watch Demo</button>
        </div>
      </div>
      <div className='hero-image'>
        <div className='task-preview'>
          <div className='task-item completed'>
            <span className='checkmark'>✓</span>
            <span>Complete project proposal</span>
          </div>
          <div className='task-item'>
            <span className='checkbox'>□</span>
            <span>Review team feedback</span>
          </div>
          <div className='task-item'>
            <span className='checkbox'>□</span>
            <span>Schedule client meeting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
