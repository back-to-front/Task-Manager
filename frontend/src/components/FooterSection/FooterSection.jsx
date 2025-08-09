import "./FooterSection.css";
import { NavLink } from "react-router";

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
                <a
                  href='https://github.com/back-to-front/Task-Manager'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Support</h4>
            <ul>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
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
