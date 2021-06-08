import React, { Fragment, useState } from 'react';

import './styles.css';

const Bulbs = () => {
  const [on, setOn] = useState(false);
  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);
  return (
    <Fragment>
      <div className={on ? 'bulb-on' : 'bulb-off'} />
      <button onClick={lightOn}>On</button>
      <button onClick={lightOff}>Off</button>
    </Fragment>
  );
};

function App() {
  return (
    <div className="center">
      <Bulbs />
    </div>
  );
}

export default App;
