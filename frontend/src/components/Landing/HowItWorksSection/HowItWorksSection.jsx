import "./HowItWorksSection.css";

function HowItWorksSection() {
  return (
    <section className='how-it-works-section'>
      <div className='container'>
        <h2 className='section-title'>How It Works</h2>
        <div className='steps-grid'>
          <div className='step'>
            <div className='step-number'>1</div>
            <h3>Add Your Tasks</h3>
            <p>
              Simply type in what you need to do. Our clean interface makes it
              quick and easy.
            </p>
          </div>
          <div className='step'>
            <div className='step-number'>2</div>
            <h3>Organize & Filter</h3>
            <p>
              Use our smart filters to view all tasks, completed ones, or just
              what's left to do.
            </p>
          </div>
          <div className='step'>
            <div className='step-number'>3</div>
            <h3>Complete & Track</h3>
            <p>
              Check off tasks as you complete them and watch your progress with
              real-time statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
