import { useState, useEffect } from 'react';

export function useServiceWorker() {
  const [state, setState] = useState({ updateAvailable: false });
  useEffect(() => {
    window.addEventListener('update ready', e => {
      const registration = e.detail;
      setState({
        updateAvailable: true,
        registration
      });
    });
    return () => {
      window.removeEventListener('update ready');
    };
  }, []);
  return state;
}
