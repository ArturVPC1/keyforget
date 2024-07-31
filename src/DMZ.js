import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, modePressed } from './Playmat';
import './DMZ.css';

export default function DMZ() {
  return (
    <section className="dmz">
      <ModeSwapper />
    </section>
  );
}

function ModeSwapper() {
  const { dispatch, singlePlayerMode } = useContext(PlayContext);
  return (
    <button onClick={() => dispatch(modePressed())}>
      <span>{`${singlePlayerMode ? '🗡️' : '⚔'}`}</span>
    </button>
  );
}
