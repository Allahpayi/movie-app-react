import React, { Component } from 'react'
import Card from './card/Card';
import Header from './header/Header';
import Pagination from './other/Pagination';


export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Header favorites={this.props.favorites} getSearchMovies={this.props.getSearchMovies} />
                        </div>
                    </div>
                    {
                        this.props.searchResults.length === 0 ?
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="movie-tab" data-toggle="tab" href="#movie" role="tab" aria-controls="movie" aria-selected="true">All Movies</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="weekTrend-tab" data-toggle="tab" href="#weekTrend" role="tab" aria-controls="weekTrend" aria-selected="false">Week Trend</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="dayTrend-tab" data-toggle="tab" href="#dayTrend" role="tab" aria-controls="dayTrend" aria-selected="false"> Day Trend</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="movie" role="tabpanel" aria-labelledby="movie-tab">
                                            <div className="row">
                                                {

                                                    this.props.movies.length !== 0 ? this.props.movies.map(movie => (
                                                        <Card key={movie.id} movie={movie} addCard={this.props.addCard} favorites={this.props.favorites} />
                                                    )) : ""
                                                }
                                            </div>
                                            <div className="row">
                                                <Pagination getMovies={this.props.getMovies} />
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="weekTrend" role="tabpanel" aria-labelledby="weekTrend-tab">
                                            <div className="row pb-4">
                                                {

                                                    this.props.weekTrendMovie.length !== 0 ? this.props.weekTrendMovie.map(weekTrendMovie => (
                                                        <Card key={weekTrendMovie.id} movie={weekTrendMovie} addCard={this.props.addCard} favorites={this.props.favorites} />
                                                    )) : ""
                                                }
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="dayTrend" role="tabpanel" aria-labelledby="dayTrend-tab">
                                            <div className="row pb-4">
                                                {

                                                    this.props.dayTrendMovie.length !== 0 ? this.props.dayTrendMovie.map(dayTrendMovie => (
                                                        <Card key={dayTrendMovie.id} movie={dayTrendMovie} addCard={this.props.addCard} favorites={this.props.favorites} />
                                                    )) : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div className="row pb-4" >
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/">All Movies</a>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    this.props.searchResults.length !== 0 ? this.props.searchResults.map(movie => (
                                        <Card key={movie.id} movie={movie} addCard={this.props.addCard} favorites={this.props.favorites} />
                                    )) : ""
                                }
                            </div>
                    }
                </div>
            </div>
        )
    }
}
