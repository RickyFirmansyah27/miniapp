import React from 'react';
import './component.css'

class Static extends React.Component {
    constructor() {
        console.log("constructor detail")
        super();
        this.state = {
            name: 'Ricky Firmansyah',
            email: 'Ricky_Firmansyah2707@gmail.com',
            phone: '0822-8128-2646',
            title : "StateLess"
        }
    }
   
    render() {
      console.log("render detail")
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div className='profile'>
                    <div className='card'>
                        <img style={{ margin: '30px' }} src="https://via.placeholder.com/150" alt="profile pic" />
                        <h3>Name: {this.state.name}</h3>
                        <h3>Email: {this.state.email}</h3>
                        <h3>Phone: {this.state.phone}</h3>
                    </div>
                </div>
            </div>
        );
    }
  }  

export default Static;
