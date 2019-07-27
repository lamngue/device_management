import React, { Component } from 'react';
import './App.css';
import DeviceTable from './components/deviceTable';
import SearchAndAddDevice from './components/searchAndAddDevice';
class App extends Component {
  constructor() {
    super();
    this.state = {
      devices: [],
      editID: null,
      searchText: '',
      search: '',
    }
    this.saveDevice = this.saveDevice.bind(this);
    this.deleteDevice = this.deleteDevice.bind(this);
    this.searchDevice = this.searchDevice.bind(this);
  }
  getItemId(id) {
    this.setState({ editID: id });
  }
  saveDevice(device) {
    debugger;
    //add device
    if (!this.state.editID) {
      const devices = [...this.state.devices, device];
      this.setState({ devices });
    }
    //edit device
    else {
      let devices = [...this.state.devices];
      devices[this.state.editID] = device;
      this.setState({ devices });
    }
  }
  deleteDevice(tt) {
    const devices = [...this.state.devices.filter((device, index, self) => {
      return self.indexOf(device) !== Number(tt);
    })];
    this.setState({ devices });
  }
  searchDevice(text) {
    // const devices = [...this.state.devices.filter(device => device.maSP.includes(text))];
    // this.setState({ devices });
    this.setState({
      search: text
    })
  }
  render() {
    console.log(this.state.devices);
    const devices = this.state.devices.filter(device => device.maSP.includes(this.state.search))
    return (
      <div className="App">
        <h1 className="text-center">Quản lý thiết bị</h1>
        <SearchAndAddDevice
          searchDevice={this.searchDevice}
          saveDevice={this.saveDevice}
          devices={devices}
          className="abc"
        />
        <DeviceTable searchText={this.state.searchText} 
        getItemId={(id) => this.getItemId(id)} 
        saveDevice={this.saveDevice} 
        deleteDevice={this.deleteDevice} 
        devices={devices} />
      </div>
    );
  }

}

export default App;