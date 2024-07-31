import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, changeAmber, changeKeyCost } from './Playmat';
import './Amber.css';

export default function Amber() {
  return (
    <section className="amber">
      <AmberControls />
      <CurrentAmber />
      <KeyCostControls />
    </section>
  );
}

function CurrentAmber() {
  const playState = useContext(PlayContext);
  const { amber, keyCost } = playState;
  return (
    <section className="current-amber">
      <Stat>{`${amber} / ${keyCost}`}</Stat>
    </section>
  );
}

function AmberControls() {
  const { dispatch } = useContext(PlayContext);
  return (
    <section className="amber-controls">
      <button onClick={() => dispatch(changeAmber(-1))}>-</button>
      <button onClick={() => dispatch(changeAmber(1))}>+</button>
    </section>
  );
}

function KeyCostControls() {
  const { dispatch } = useContext(PlayContext);
  return (
    <section className="key-cost-controls">
      <button onClick={() => dispatch(changeKeyCost(-1))}>-</button>
      <button onClick={() => dispatch(changeKeyCost(1))}>+</button>
    </section>
  );
}
