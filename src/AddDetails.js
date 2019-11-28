import React,{Component} from 'react';

class AddDetails extends Component {

    state = {
      nm : ' ',
        ag : ' ',
        next : ' '
    }
    handleChange = (e) =>{
        
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.adddet(this.state);
        this.setState({
        nm : ' ',
        ag : ' ',
        next : ' '
        })
    }
    render() {
        return (
            <div className="Add-details">
                <form onSubmit={ this.handleSubmit }>
                    <lable htmlFor="name">Name</lable>
                    <input type = "text" id = "nm" value={this.state.nm} onChange = { this.handleChange }  />
                    <lable htmlFor="age">Age</lable>
                    <input type = "text" id = "ag" value={this.state.ag} onChange = { this.handleChange }  />
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddDetails