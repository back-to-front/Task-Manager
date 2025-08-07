import { memo } from "react";
import "./LoadingSpinner.css";

function LoadingSpinner({ size = "medium", text = "Loading..." }) {
  return (
    <div className='loading-container'>
      <div className={`loading-spinner spinner-${size}`}></div>
      {text && <p className='loading-text'>{text}</p>}
    </div>
  );
}

export default memo(LoadingSpinner);
