import React, { Component } from 'react'
import cs from 'classnames'


const TICK_RATE = 1000
const GRID_SIZE = 35
const GRID = []

for (let i = 0; i <= GRID_SIZE; i++) {
  GRID.push(i)
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