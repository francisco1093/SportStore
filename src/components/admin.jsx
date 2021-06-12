import { Component } from 'react';
import DataService from './../services/dataService';

class Admin extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="admin-page px-4 py-5">
            <h1>Hi Admin</h1> 
            <button onClick={this.testRead} className="btn btn-primary">Test read</button>
            <button onClick={this.sendData} className="btn btn-warning">Send data</button>
            <button onClick={this.clearData} className="btn btn-danger">Clear my data</button>
        </div>
        );
    }

    testRead = async () =>{
        console.log("Test Read");
        let service = new DataService();
       let dataTest= await service.getCatalog();
       console.log("DATATest: ",dataTest);

    }

    sendData = async () =>{
        console.log("Send data");
        let service = new DataService();
        await service.seedData();
    };

    clearData= async() =>{
        console.log("Clear data");
        let service = new DataService();
        await service.clearData();
    };
}
 
export default Admin;