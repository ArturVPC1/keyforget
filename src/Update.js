import React from 'react';
import { useServiceWorker } from './useServiceWorker';
import './Update.css';

export default function Update() {
  const { updateAvailable, registration } = useServiceWorker();
  if (!updateAvailable || !registration) {
    return null;
  }
  const refresh = () => {
    if (!registration.waiting) {
      return;
    }
    registration.waiting.postMessage('skipWaiting');
  };
  return (
    <div className="update" onClick={refresh}>
      <span>
        A new version is ready. Exit and re-open all running instances/tabs to
        get the update.
      </span>
    </div>
  );
}
