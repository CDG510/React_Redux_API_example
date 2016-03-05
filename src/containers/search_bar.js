import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        //need to bind callbacks
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value)
        //change the state to the input we got
        this.setState({term: event.target.value})

    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term)
        //clear input
        this.setState({term: ''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5 day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

// exporting null because 1st argument it doesn't need state
export default connect(null, mapDispatchToProps)(SearchBar)
