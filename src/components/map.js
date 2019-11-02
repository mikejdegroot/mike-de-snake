import React, { Component } from 'react';
import Snake from './snake';


export default class Map extends Component {
  state = {
    gridSize: 10,
    blocks: []
  }

  componentDidMount(){
    const { gridSize } = this.state;
    let i = 0;
    let row = 0;
    while (i <= gridSize) {
      i += 1;
      const blocks = { coloumn: i };
      this.setState(prevState => ({ blocks: [...prevState.blocks, blocks]}))
    }
  }

  renderGrid = () => {
    const { blocks } = this.state;
    let i = 0;
    return blocks.map(block => (
      <Snake />
    ))
  };

  render() {
    return (
      <div className="map">
        {this.renderGrid()}
      </div>
    )
  }
}
