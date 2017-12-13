import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2'

class Donut extends Component {
    constructor(){
        super()
        this.state = {
          
    
          data2: {
            labels: ['yellow', 'blue', 'red'],
          
           datasets: [
            {
              displayName: 'Doughnut Chart',
              label: 'Average Temperature in PHX',
              backgroundColor: [
                'yellow',
                'blue',
                'red'
                ],
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: [
                '#FFFFCC',
                '#DEEFF5',
                '#FFB2B2'
                ],
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [200, 150, 133]
            }
          ]
          }
        }
        this.regernate = this.regernate.bind(this)
        this.pieBruh = this.pieBruh.bind(this)
    }
    
    regernate(){
        var yellow=  Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        var blue = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        var red = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    
        var arr = [yellow, blue, red]
    
        var data2Copy = this.state.data2
        data2Copy.datasets[0].data = arr
    
        this.setState({data2: data2Copy})
    
      }

      pieBruh(){
        var dataCopy = this.state.data2
        var arr = [this.state.pieYellow, this.state.pieBlue, this.state.pieRed]
    
        dataCopy.datasets[0].data = arr
    
        this.setState({data2: dataCopy})
        
      }
    

    render() {
        return (
            <div>
                <Doughnut 
        data={this.state.data2} 
          
          options={{
            maintainAspectRatio: true}}
        />
        <br/>
        <button onClick={this.regernate}>Random</button><br/>
        <input onChange={(e) => {this.setState({pieYellow: e.target.value})}} placeholder='yellow'/><input onChange={(e) => {this.setState({pieBlue: e.target.value})}} placeholder='blue' /><input onChange={(e) => {this.setState({pieRed: e.target.value})}} placeholder='red'/>
        <button onClick={this.pieBruh}>Make IT!</button>
            </div>
        );
    }
}

export default Donut;