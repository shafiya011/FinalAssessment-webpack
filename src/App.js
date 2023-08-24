import React from 'react';
import Flower from './asset/flower';
import { useState, memo } from 'react';

const Swatch = ({ color }) => {
  console.log(`swatch rendered ${color}`);
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100px',
        height: '100px',
        margin: 10,
      }}
    ></div>
  );
};
const MemoComponent = memo(Swatch);

const App = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState();
  console.log('AppRender', appRenderIndex);
  return (
    <div>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-Render App
      </button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'green')}>
        change color
      </button>

      <div>
        <MemoComponent color="red"></MemoComponent>
      </div>
      <Flower></Flower>
    </div>
  );
};
export default App;
