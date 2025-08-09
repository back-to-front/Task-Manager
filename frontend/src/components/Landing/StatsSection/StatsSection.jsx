import "./StatsSection.css";

function StatsSection() {
  return (
    <section className='stats-section'>
      <div className='container'>
        <div className='stats-grid'>
          <div className='stat-item'>
            <div className='stat-number'>10,000+</div>
            <div className='stat-label'>Tasks Completed</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>98%</div>
            <div className='stat-label'>User Satisfaction</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>24/7</div>
            <div className='stat-label'>Available</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>Free</div>
            <div className='stat-label'>Always</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
