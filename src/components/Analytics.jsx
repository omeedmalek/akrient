import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 - Replace with your Measurement ID
    ReactGA.initialize('G-XXXXXXXXXX'); // REPLACE THIS WITH YOUR ACTUAL ID!
    
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
