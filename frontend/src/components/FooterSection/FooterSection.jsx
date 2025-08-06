import "./FooterSection.css";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h4>Task Manager</h4>
            <p>The simple way to organize your life and boost productivity.</p>
          </div>
          <div className='footer-section'>
            <h4>Product</h4>
            <ul>
              <li>
                <a href='#features'>Features</a>
              </li>
              <li>
                <a href='#demo'>Demo</a>
              </li>
              <li>
                <a href='#pricing'>Pricing</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Support</h4>
            <ul>
              <li>
                <a href='#help'>Help Center</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <a href='#faq'>FAQ</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Company</h4>
            <ul>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#blog'>Blog</a>
              </li>
              <li>
                <a href='#careers'>Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {currentYear} Task Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
