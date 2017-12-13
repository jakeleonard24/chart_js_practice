import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './Components/Bar'
import Donut from './Components/Doughnut'
import LineGraph from './Components/Line'
import Creator from './Components/Create'








class App extends Component {
 
  

 
  
  render() {
    console.log(this.state)

    
    return (
      <div className="App">
        <header><h1>Graphs and Graph Maker</h1></header>
        <div className='sizer'>
        <BarGraph />
        </div>
        
<div className='sizer2'>
        <Donut />
        
</div>
      <div className='sizer'>
        <LineGraph />
      </div>

      <Creator />
        
      </div>  
    );
  }
}

export default App;
