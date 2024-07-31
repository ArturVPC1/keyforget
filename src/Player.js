import React, { useContext } from 'react';
import Chain from './Chain';
import Keys from './Keys';
import Amber from './Amber';
import Steal from './Steal';
import { PlayContext } from './Playmat';

export default function Player({ reverse = false, player }) {
  const { dispatch, singlePlayerMode, ...state } = useContext(PlayContext);
  const playerDispatch = action => dispatch({ ...action, player });

  return (
    <section
      className={`playmat${reverse ? ' reverse' : ''}${
        singlePlayerMode ? ' single-player-mode' : ''
      }`}
    >
      <PlayContext.Provider
        value={{ dispatch: playerDispatch, singlePlayerMode, ...state[player] }}
      >
        <Steal />
        <Keys />
        <Amber />
        <Chain />
      </PlayContext.Provider>
    </section>
  );
}
