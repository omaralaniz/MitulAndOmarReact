import React, { Component } from 'react';
import './fishes.css';

class Fishes extends Component {
  constructor(){
    super();
    this.state = {
      fishes:[]
    }
  }
  
  componentDidMount() {
    fetch('/api/fishes')
    .then(res => res.json())
    .then(fishes => this.setState({fishes}, () => console.log ('Fishes fetched...', fishes)));
  }

  render() {
    return (
      <div>
       <h2>Fishes</h2>
        <ul>
          {this.state.fishes.map(fish =>
            <li key={fish.id}>Fish: { fish.name } weight: { fish.weight}lbs.</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Fishes;
