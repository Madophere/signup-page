import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            email: "",
            password: "",
           


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

  
    handleSubmit = (event) => {

        alert(`${this.state.firstName}   Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            email: "",
            password: '',
           
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h2>User Registration</h2>
                    <label>Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Name..." required/><br />
                   
                    <label>Email :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Mail id..." required /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." required /><br />
                    
                
                    <input type="submit" value="Signup" />
                </form>

            </div>
            
        )
    }
}

export default Form