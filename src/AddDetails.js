import React,{Component} from 'react';

class AddDetails extends Component {

    state = {
        nm : null,
        ag : null,
        nex : null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.adddet(this.state);
    }
    render() {
        return (
            <div className="Add-details">
                <form onSubmit={ this.handleSubmit }>
                    <lable htmlFor="name">Name</lable>
                    <input type = "text" id = "nm" onChange = { this.handleChange }/>
                    <lable htmlFor="age">Age</lable>
                    <input type = "text" id = "ag" onChange = { this.handleChange }/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddDetails