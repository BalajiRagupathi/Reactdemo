import React , { Component } from 'react';
import About from './Aboutd.js';
import AddDetails from '../AddDetails';
import Color from '../hoc/Colors';

class Aboutc extends Component {
state = {
  name: 'Bala',
  age: 20,

    about : [
     { nm: 'John' , ag: 18 , next: 1 },
     { nm: 'Metha' , ag: 19 , next: 2 },
      {nm: 'Pra' , ag: 20 , next: 3 }
    ]
  }

  adddet = ( val ) => {
    val.next = Math.floor(Math.random() * 100);
   let about = [...this.state.about , val];
   this.setState({
     about : about
   })
   console.log(about);
  }

  deletedetail = ( delid ) => {
    const about = this.state.about.filter(ele =>{
      return ele.next !== delid
    })
    this.setState({
      about: about
    })
    console.log(about);
  }

  render(){
    return (
      <div className="About container">
        <h1 className="center">About</h1>
        <h4>HI it's me { this.state.name } and am { this.state.age } , my friends are</h4>
        <About deletedetail ={ this.deletedetail } abt={this.state.about } /> 
        <AddDetails adddet = { this.adddet } />
    </div>
    );
  }
}

/*const Aboutc = () => {
    return (
        <div className="About-content">
            <h1>About</h1>
            <p>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.6 :npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.6: wanted added 1 package from 1 contributor, removed 2 packages and updated 6 packages in 38.263s fixed 16295 of 16295 vulnerabilities in 889025 scanned packages</p>
        </div>
    )
}*/

export default Color(Aboutc)