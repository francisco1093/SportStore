import React, { Component } from 'react';
import "./quantiryPicker.css"

class QuantiryPicker extends Component{
state = {
 name:"francisco",
 quantiryPickerValue:1
};

render(){
    return(
     <div className="quantiryPicker-page">   
        <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary plus">+</button> 
        <label className="quantiry-value">{this.state.quantiryPickerValue}</label>
        <button onClick={this.decreaseQuantiy} className="btn btn-sm btn-primary minus">-</button>
    </div>
        );
    }

increaseQuantity = () =>{
    console.log("Increase");
    if(this.state.quantiryPickerValue<99)
    this.setState({quantiryPickerValue:this.state.quantiryPickerValue+1})
    }

decreaseQuantiy=()=>{
        console.log("Decrease");
        if(this.state.quantiryPickerValue>1)
        this.setState({quantiryPickerValue:this.state.quantiryPickerValue-1})

    }


}

export default QuantiryPicker
