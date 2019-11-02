import React, { Component } from 'react';
import Snake from './snake';


export default class Map extends Component {
  componentDidMount(){}

  render() {
    return (
      <div className="map">
        <Snake />
      </div>
    )
  }
}
