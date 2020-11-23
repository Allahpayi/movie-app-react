import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pagination extends Component {
    state = {
        pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        currentPage: 1,
    }
    render() {
        return (
            <nav className='col-md-12 my-4'>
                <ul className="pagination">
                    {
                        this.state.pagination.map(p => (
                            <li key={p} className={(this.state.currentPage === p ? 'active ' : '') + 'page-item'}><Link className="page-link" onClick={() => { this.props.getMovies(p); this.setState({ currentPage: p }) }} to="">{p}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}
