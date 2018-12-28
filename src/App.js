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