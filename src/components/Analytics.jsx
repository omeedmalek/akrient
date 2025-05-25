import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 - G-RS675T746N
    ReactGA.initialize('G-XXXXXXXXXX'); // REPLACE THIS!
    
    // Send initial pageview
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title 
    });
  }, []);

  useEffect(() => {
    // Track page changes
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title 
    });
  }, [location]);

  return null;
};

export default Analytics;
