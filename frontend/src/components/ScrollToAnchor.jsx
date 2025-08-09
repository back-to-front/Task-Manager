import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export default function ScrollToAnchor() {
  const location = useLocation();
  const lastHashRef = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHashRef.current = location.hash.slice(1);
    }

    if (lastHashRef.current && document.getElementById(lastHashRef.current)) {
      setTimeout(() => {
        document.getElementById(lastHashRef.current)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location]);

  return null;
}
