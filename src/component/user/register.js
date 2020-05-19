import React from 'react'
import './register.css';


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            password:'',
            confirmPassword:'',
            email:'',
            phone:0,
            address:''
        }
    }
    handleData = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        // e.preventDefault()
        let formData={}
        formData.firstName=this.state.firstName
        formData.lastName=this.state.lastName
        formData.password=this.state.password
        formData.confirmPassword=this.state.confirmPassword
        formData.email=this.state.email
        formData.phone=this.state.phone
        formData.address=this.state.address
        console.log(formData)
    }

    render(){
        return(
            <div  className="wrapper">
                <div className="title">
                    Registration Form
                </div>
                <form>
                <div className="form-group row">                
                <label className="col-sm-5 inputField ">First Name</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleData} className="form-control col-sm-7 "/>
                </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Last Name</label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleData} className="form-control col-sm-7"/>
                </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleData} className="form-control col-sm-7"/>
                 </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Confirm Password</label>
                <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleData} className="form-control col-sm-7"/>
                </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleData} className="form-control col-sm-7"/>
                </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Phone Number</label>
                <input type="number" name="phone" value={this.state.phone} onChange={this.handleData} className="form-control col-sm-7"/>
                </div>
                <div className="form-group row"> 
                <label className="col-sm-5 inputField">Adderss</label>               
                <textarea className="form-control col-sm-7" name="address" onChange={this.handleData} value={this.state.address}/>
                </div>
                <div className="form-group row"> 
                <button className="btn col-sm-12 inputField" onClick={this.handleSubmit}>Register</button>
                </div>
                </form>
            </div>
        )
    }
}
export default Register