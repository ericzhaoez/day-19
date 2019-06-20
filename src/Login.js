import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pass: "",
      users: [],
      store: []
    };

    this.routeChange = this.routeChange.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registered
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }

  componentDidMountz(){
    axios.post('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registered
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }

  handleInputs(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.value : target.value;
    const name = target.name;
    //this.setState({value: event.target.value});
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    alert('A name & pass were submitted: ' + this.state.name + " " + this.state.pass);
    event.preventDefault();
    this.componentDidMountz();
  }

  routeChange() {
    let path = `/rentals`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
    <h1>Login</h1>
      <form>
      <label>
        Name:
        <input name= "name" type="text" value={this.state.name} onChange={this.handleInputs} />
      </label>
    </form>
    <form onSubmit={this.handleSubmit}>
      <label>
        Password:
        <input name= "pass" type="text" value={this.state.pass} onChange={this.handleInputs} />
      </label>
      <input type="submit" value="Submit" onClick={this.routeChange} />
    </form>
    </div>
    );
  }
}
export default Login

// import React, { Component } from "react";
// //import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// //import "./Login.css";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }