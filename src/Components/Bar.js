import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
           data1: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          
           datasets: [
            {
              label: 'Average Temperature in PHX',
              backgroundColor: ['red','red','red','red','red','red','red'],
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [82, 89, 99, 105, 110, 125, 130]
            }
          ]
        }
    }

    this.julyChanger=this.julyChanger.bind(this)
    this.juneChanger=this.juneChanger.bind(this)
}

componentWillMount(){
    for(var i = 0; i < this.state.data1.datasets[0].data.length; i++ ){
    if(this.state.data1.datasets[0].data[i] < 100){
      var dataCopy = this.state.data1
      dataCopy.datasets[0].backgroundColor[i] = 'green'
      this.setState({
        data1: dataCopy
      })
    }
    }
  }

  julyChanger(){
    var dataCopy = this.state.data1
    var arr = this.state.data1.datasets[0].data
    arr[6] -= 10
    dataCopy.datasets[0].data = arr 
    if(dataCopy.datasets[0].data[6] < 100){
      dataCopy.datasets[0].backgroundColor[6] = 'green'
    }
    this.setState({data1: dataCopy})
    
    
  }

  juneChanger(){
    var dataCopy = this.state.data1
    dataCopy.datasets[0].data[5] = dataCopy.datasets[0].data[5] - 10
    if(dataCopy.datasets[0].data[5] < 100){
      dataCopy.datasets[0].backgroundColor[5] = 'green'
    }
    this.setState({data1: dataCopy})
    
  }

          
    render() {
        return (
            <div>
                <Bar 
          data={this.state.data1} redraw
          width={150}
          height={60}
          options={{
            maintainAspectRatio: true
          }}
        />

        <button onClick={this.julyChanger}>It's not that hot in july</button>
        <button onClick={this.juneChanger}>It's not that hot in june</button>
            </div>
        );
    }
}

export default BarGraph;