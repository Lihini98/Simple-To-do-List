import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

updateInput(key, value){
  this.setState({
    [key]: value
  });
}

addItem(){
  const newItem={
    id: 1+ Math.random(),
    value: this.state.newItem.slice()
  };

  const list = [...this.state.list];

  list.push(newItem);

  this.setState({
    list,
    newItem:""
  });
}
deleteItem(id){
  const list  = [...this.state.list];

  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}

  render(){
    return(

    
      <div className="App">
        <h1 className="header">TO DO LIST</h1>
        <div className="container">
          <p class="h5">Add an Item...</p>
          <br/>
          <input
             type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button type="button" class="btn btn-danger"
                    onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
