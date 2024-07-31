import React, { useContext } from 'react';
import { PlayContext, stealPressed } from './Playmat';

import './Steal.css';

export default function Steal() {
  const { dispatch, singlePlayerMode } = useContext(PlayContext);
  if (singlePlayerMode) {
    return null;
  }

  return (
    <section className="steal">
      <button onClick={() => dispatch(stealPressed)}>⬇Steal⬇</button>
    </section>
  );
}
