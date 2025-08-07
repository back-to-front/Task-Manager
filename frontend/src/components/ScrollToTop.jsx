import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop component that scrolls the window to the top
 * when navigating to a new page
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
