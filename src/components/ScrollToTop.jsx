import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
  }, [pathname]); // Trigger the effect when the pathname changes

  return null; // No UI is rendered, just the effect
};

export default ScrollToTop;

