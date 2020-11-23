import React, { Component } from 'react'
import FavoritesCard from '../favorites/FavoritesCard';
import Search from './Search';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-4 ml-auto">
                        <div className='header-content'>
                            <span>
                                <Search getSearchMovies={this.props.getSearchMovies} />
                            </span>
                            <span>
                                <FavoritesCard favorites={this.props.favorites} />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
