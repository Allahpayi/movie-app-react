import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FavoritesCard extends Component {
    render() {
        return (
            <div className="favorites">
                <div className="dropdown">
                    <div className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    {
                        this.props.favorites.length === 0 ?
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" style={{ textAlign: 'center', margin: '0rem' }}>Empty Favorites</p>
                            </div> :
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    this.props.favorites.map(movie => (
                                        <div className="nowrap" key={movie.id}>
                                            <Link className="dropdown-item" to={'movie-detail/' + movie.id} ><span>{movie.title.length > 13 ? movie.title.slice(0, 13) : movie.title}</span></Link>
                                        </div>
                                    ))
                                }
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="favorites" style={{ textAlign: 'center' }}>All Favorites</Link>
                            </div>
                    }

                </div>
            </div>
        )
    }
}
