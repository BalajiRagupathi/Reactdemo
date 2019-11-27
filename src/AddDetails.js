import React,{Component} from 'react';

class AddDetails extends Component {

    state = {
        nm : null,
        ag : null,
        next : null
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
            nm: ' ',
            ag : ' ',
            next : ' '
        })
    }
    render() {
        return (
            <div className="Add-details">
                <form onSubmit={ this.handleSubmit }>
                    <lable htmlFor="name">Name</lable>
                    <input type = "text" id = "nm" onChange = { this.handleChange } value={this.state.nm} />
                    <lable htmlFor="age">Age</lable>
                    <input type = "text" id = "ag" onChange = { this.handleChange } value={this.state.next} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddDetails