import React, { Component } from 'react';
import Header from './header';
import Board from './board';
import './game.css';

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <h1>HOT or COLD</h1>
        <Board />
      </div>
    );
  }
}
