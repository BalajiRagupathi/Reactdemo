// Components States Props Conditions
import React from 'react';
const Aboutd = ({abt , deletedetail}) => {
     return(
        <div className="List">
            {
                abt.map(ninja => {
                     return ninja.ag ?  (
                            <div onClick={ () => {deletedetail(ninja.next)} } className="about-contents collection container" key={ninja.next}>
                                <h6> 
                                    <div className="left">name: { ninja.nm } </div> 
                                    <div className="right">id: { ninja.next } </div>
                                    <div className="center">age: { ninja.ag } </div>
                                </h6>
                            </div>
                    ) : null;
                })
            }
        </div>
    )
}
//id (next) must be same in delete and inserting
export default Aboutd

/* Another two type of condetions

const About = ({abt}) => {
         const aboutList = abt.map(ninja => {
             FIRST TYPE  ~>
             if ( ninja.ag  >  19) {
                return (
                    <div className="about-content" key={ninja.nex}>
                        <p>{ ninja.nex }</p>
                        <p>name: { ninja.nm }</p>
                        <p>age: { ninja.ag }</p>
                    </div>
                )
             }else return null 
            --X--

            SECOND TYPE ~>
             return ninja.ag > 19 ? (
                 <div className="about-content" key={ninja.nex}>
                        <p>{ ninja.nex }</p>
                        <p>name: { ninja.nm }</p>
                        <p>age: { ninja.ag }</p>
                    </div>
          ) : null;
        })
        --X--

        return(
                <div className="List">
                { aboutList }
                </div>
        )
}


*/

/* UI Components without stack , receive data props ,only concerned with UI , use functions to create
import React , { Component }from 'react';

class About extends Component{
    render(){
        const { abt } = this.props;
        const aboutList = abt.map(ninja => {
            return (
                <div className="about-content" key={ninja.nex}>
                    <p>{ ninja.nex }</p>
                    <p>name: { ninja.nm }</p>
                    <p>age: { ninja.ag }</p>
                </div>
            )
        })
        return(
                <div className="List">
                { aboutList }
                </div>
        )
    }
}

export default About
*/