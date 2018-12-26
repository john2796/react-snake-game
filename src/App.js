import React, { Component } from 'react';



const TICK_RATE = 100;
const GRID_SIZE = 35;
const GRID = [];

for (let i = 0; i < GRID_SIZE.length; i++) {
  GRID.push(i);
}

const DIRECTIONS = {
  UP: 'UP',
  BOTTOM: 'BOTTOM',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
}

const DIRECTION_TICKS = {
  UP: (x, y) => ({ x, y: y - 1 }),
  BOTTOM: (x, y) => ({ x, y: y + 1 }),
  RIGHT: (x, y) => ({ x: x + 1, y }),
  LEFT: (x, y) => ({ x: x - 1, y }),
}

const KEY_CODES_MAPPER = {
  38: 'UP',
  39: 'RIGHT',
  37: 'LEFT',
  40: 'BOTTOM',
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Snake Game </h1>
      </div>
    );
  }
}

export default App;
