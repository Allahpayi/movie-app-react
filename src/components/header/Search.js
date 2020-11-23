import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    state = {
        query: ""
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.getSearchMovies(this.state.query, e)} className="form">
                    <input onChange={(e) => this.setState({ query: e.target.value })} value={this.state.query} type="text" name="query" placeholder="Search" />
                    <button type="submit"><Link  to={this.state.query!==""? "" :"/"}><i className="fa fa-search" aria-hidden="true"></i></Link> </button>
                </form>
            </div>
        );
    }
}

export default Search;
