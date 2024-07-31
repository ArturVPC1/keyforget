import { useEffect } from 'react';

function preventDefault(e) {
  e.preventDefault();
}

function disableScroll() {
  console.log('disabling touchmove');
  document.body.addEventListener('touchmove', preventDefault, {
    passive: false
  });
}
function enableScroll() {
  console.log('enabling touchmove');
  document.body.removeEventListener('touchmove', preventDefault, {
    passive: false
  });
}

export default function useDisabledTouchMove() {
  useEffect(() => {
    disableScroll();
    return enableScroll;
  }, []);
}
