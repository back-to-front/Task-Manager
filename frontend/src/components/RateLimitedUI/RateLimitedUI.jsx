import "./RateLimitedUI.css";
import { ZapIcon } from "lucide-react";

export default function RateLimitedUI() {
  return (
    <div className='main'>
      <div className='second'>
        <div className='third'>
          <div className='fourth'>
            <ZapIcon className='icon' />
          </div>
          <div className='fifth'>
            <h3 className='h3Text'>Rate Limit Reached</h3>
            <p className='pText1'>
              You've made too many requests in a short period. Please wait a
              moment.
            </p>
            <p className='pText2'>
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
