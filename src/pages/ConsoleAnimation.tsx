import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MatrixText from '../components/MatrixAnimation';

const style = {
  height: '100vh', // Set the height to fill the entire viewport
};

export default function Console() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Wait for 15 seconds before redirecting
    const timeoutId = setTimeout(() => {
      navigate('/success');
    }, 2000); // Changed to 15000 milliseconds (15 seconds)

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={style}>
      <MatrixText />
    </div>
  );
}
