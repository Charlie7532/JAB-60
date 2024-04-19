import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MatrixText from '../components/MatrixAnimation';

export default function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Wait for 15 seconds before redirecting
    const timeoutId = setTimeout(() => {
      navigate('/success');
    }, 10000);

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <React.Fragment>
      <MatrixText />
    </React.Fragment>
  );
}
