import React , { Component } from 'react';
import About from '../About.js';
import AddDetails from '../AddDetails';
import Color from '../hoc/Colors';

class Aboutc extends Component {
state = {
  name: 'Bala',
  age: 20,

    about : [
     { nm: 'John' , ag: 18 , nex: 1 },
     { nm: 'Metha' , ag: 19 , nex: 2 },
      {nm: 'Pra' , ag: 20 , nex: 3 }
    ]
  }

  adddet = ( val ) => {
    val.next = Math.random();
   let about = [...this.state.about , val];
   this.setState({
     about : about
   })
  }

  deletedetail = ( delid ) => {
    const about = this.state.about.filter(ele =>{
      return ele.nex !== delid
    })
    this.setState({
      about
    })
  }

  render(){
    return (
      <div className="About-content">
      <h1>HI it's me { this.state.name } and am { this.state.age }</h1>
      <h2>About</h2>
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