import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './Components/Bar'
import Donut from './Components/Doughnut'
import LineGraph from './Components/Line'

import {Bar} from 'react-chartjs-2';






class App extends Component {
  constructor(){
    super()
    this.state = {
      

      
      

      data4:{
        labels: [],
        
         datasets: [
          {
            label: '',
            backgroundColor: '',
            borderColor: '',
            borderWidth: 1,
            hoverBackgroundColor: '',
            hoverBorderColor: '',
            data: []
          }
        ]
      },

      selected: '',
      columnArr: [],
      title: '',
      color: '',
      hoverColor: '',
      
      label1: '',
      label2: '',
      label3: '',
      label4: '',
      label5: '',
      label6: '',
      label7: '',
      label8: '',
      label9: '',
      label10: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',

      pieYellow: 0,
      pieBlue: 0,
      pieRed: 0

    }
  
    
   
    
    this.columnGenerator = this.columnGenerator.bind(this)
    this.inputLabel = this.inputLabel.bind(this)
    this.inputData = this.inputData.bind(this)
    this.createGraphData = this.createGraphData.bind(this)
    

  }



 
  columnGenerator(num){
    console.log(num)
    var arr = []
    for(var i = 0; i < +num; i++){
      arr.push(i)
    }
    this.setState({columnArr: arr})
  }

  inputLabel(str, i){
    if(i === 0){
      this.setState({label1: str})
    }

    if(i === 1){
      this.setState({label2: str})
    }
    if(i === 2){
      this.setState({label3: str})
    }
    if(i === 3){
      this.setState({label4: str})
    }
    if(i === 4){
      this.setState({label5: str})
    }
    if(i === 5){
      this.setState({label6: str})
    }
    if(i === 6){
      this.setState({label7: str})
    }
    if(i === 7){
      this.setState({label8: str})
    }
    if(i === 8){
      this.setState({label9: str})
    }
    if(i === 9){
      this.setState({label10: str})
    }
  }

  inputData(str, i){
    if(i === 0){
      this.setState({value1: str})
    }

    if(i === 1){
      this.setState({value2: str})
    }
    if(i === 2){
      this.setState({value3: str})
    }
    if(i === 3){
      this.setState({value4: str})
    }
    if(i === 4){
      this.setState({value5: str})
    }
    if(i === 5){
      this.setState({value6: str})
    }
    if(i === 6){
      this.setState({value7: str})
    }
    if(i === 7){
      this.setState({value8: str})
    }
    if(i === 8){
      this.setState({value9: str})
    }
    if(i === 9){
      this.setState({value10: str})
    }
  }

  createGraphData(){

    var obj = {
      labels: [],
      
       datasets: [
        {
          label: this.state.title,
          backgroundColor: this.state.color,
          borderColor: this.state.color,
          borderWidth: 1,
          hoverBackgroundColor: this.state.hoverColor,
          hoverBorderColor: this.state.hoverColor,
          data: []
        }
      ]

    }

    var arr =[this.state.label1, this.state.label2, this.state.label3, this.state.label4, this.state.label5, this.state.label6, this.state.label7, this.state.label8, this.state.label9, this.state.label10 ]

    var arr2 =[this.state.value1, this.state.value2, this.state.value3, this.state.value4, this.state.value5, this.state.value6, this.state.value7, this.state.value8, this.state.value9, this.state.value10 ]

    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        obj.labels.push(arr[i])
      }

      if(arr2[i]){
        obj.datasets[0].data.push(arr2[i])
      }
    }

    this.setState({data4: obj})


  }

  

 
  
  render() {
    console.log(this.state)

    var columns = this.state.columnArr.map((elem, i) => {
      return(
        <div>
          <input onChange={(e)=>{this.inputLabel(e.target.value, i)}} placeholder='Data label'/>
          <input onChange={(e) => {this.inputData(e.target.value, i)}} placeholder='Data amount' />
          <button>Add</button>
        </div>
      )
    })
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

      <div>
        <h3>Create A Graph</h3>
        <select onChange={(e)=>{this.setState({selected: e.target.value})}}>
          <option>Chose a Graph</option>
          <option value="VerticalBar">Vertical Bar</option>
          <option value="HorizontalBar">Horizontal Bar</option>
          <option value="Pie">Pie</option>
          <option value="Doughnut">Doughnut</option>
          <option value="Line">Line</option>
        </select>
        
        <div>
          <input placeholder='Title' onChange={(e)=>{this.setState({title: e.target.value})}}/>
          <select onChange={(e)=>{this.columnGenerator(e.target.value)}}>
          <option selected="selected"># Of Columns</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          
          </select>
          <input placeholder="Bar Color" onChange={(e)=>{this.setState({color: e.target.value})}}/>
          <input placeholder="Bar Color on Hover" onChange={(e)=>{this.setState({hoverColor: e.target.value})}} />

          {columns}
          <button onClick={()=>{this.createGraphData()}}>Create</button>

          <div className={this.state.data4.datasets[0].label ? 'sizer' : 'nope'}>
          <Bar 
          data={this.state.data4} redraw
          width={150}
          height={50}
          options={{
            maintainAspectRatio: true
          }} />
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>


      </div>
        
      </div>  
    );
  }
}

export default App;
