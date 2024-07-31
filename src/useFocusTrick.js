import { useState, useEffect } from 'react';

export default function useFocusTrick() {
  const [userIsTabbing, setUserIsTabbing] = useState(false);
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      setUserIsTabbing(true);
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);
  }, []);
  return userIsTabbing;
}
