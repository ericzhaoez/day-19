import React from 'react'
import axios from 'axios'

class rentals extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          names: [],
          stores: []
      }
    }

    // componentDidMount(){
    //     axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    //     .then(json => console.log(json.data.results))
    // }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
        .then(json => json.data.results.map(result => (
          {
            names: `${result.name.first} ${result.name.last}`,
            id: result.registered
          })))
        .then(newData => this.setState({names: newData, stores: newData}))
        .catch(error => alert(error))
      }

    render() {
        return (
          <div>
        <h1>Rentals {this.props.names}</h1>
        </div>
        );
      }
    }
    export default rentals