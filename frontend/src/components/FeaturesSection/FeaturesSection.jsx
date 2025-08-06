import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <section className='features-section'>
      <div className='container'>
        <h2 className='section-title'>Why Choose Task Manager?</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>📝</div>
            <h3>Simple & Intuitive</h3>
            <p>
              Clean, user-friendly interface that makes task management
              effortless. Add, edit, and organize tasks in seconds.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Built with modern technology for instant response times. No lag,
              no waiting - just pure productivity.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>📊</div>
            <h3>Smart Filtering</h3>
            <p>
              View all tasks, completed ones, or just what's pending. Stay
              focused on what matters most right now.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🎯</div>
            <h3>Goal Tracking</h3>
            <p>
              Monitor your progress with real-time statistics. See how many
              tasks you've completed and stay motivated.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>💾</div>
            <h3>Auto-Save</h3>
            <p>
              Never lose your work. Everything is automatically saved as you
              type, ensuring your tasks are always secure.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🔄</div>
            <h3>Easy Editing</h3>
            <p>
              Double-click to edit any task. Make changes on the fly without
              breaking your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
