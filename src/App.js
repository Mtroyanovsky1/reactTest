import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from 'react-bootstrap';



const timeSlots = [ '9-10', '10-11', '11-12', '12-1', '1-2', '2-3', '3-4', '4-5' ];

class MyModal extends Component {
  render() {
  if(this.props.isOpen === false)
    return null
  let modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff'
  }

  let backdropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, 0.3)'
  }

  return (
    <div>
       <div style={modalStyle}>
        <form>
          <input>Name</input>
          <input>PhoneNumber</input>
        </form>
       </div>
       <div style={backdropStyle} onClick={e => this.close(e)}/>}
     </div>
  )
  }
}

class TimeSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      phoneNumber: "",
      color: white
    }
  }
name(value) {
  this.setState({name: value})
}

phoneNumber(value) {
  this.setState({phoneNumber: value})
}

changeColor() {
  this.setState({color: red})
}

openModal() {
  this.setState({isOpen: true})
}

closeModal() {
  if(this.state.name.length > 1 && this.state.phoneNumber.length > 1) {
    this.setState({color: red})
  }
  this.setState({isOpen: false})
}
render() {
  return (
    <div className="slot" onClick={() => this.state.openModal} style={{backgroundColor={this.state.color}}}>{this.props.time}</div>
    <MyModal isOpen={this.state.isOpen} />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {timeSlots.map((slot) => {
          return <TimeSlot time={slot) />
        })}
      </div>
    );
  }
}

export default App;
