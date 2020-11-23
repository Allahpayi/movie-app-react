import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Card extends Component {
    state = {
        average: []
    }
    raiting = () => {
        let average = parseInt(this.props.movie.vote_average);
        for (let i = 1; i <= average; i++) {
            const newaverage = this.state.average
            if (average > 5) {
                average = 5
            }
            else {
                newaverage.push(average[i])
                this.setState({ average: newaverage })
            }
        }
    }
    componentDidMount() {
        this.raiting()
    }
    render() {
        return (
            <div className="col-md-3 mt-4" >
                <div className="movie-card" >
                    <img src={"https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path} className="img-responsive" alt="" />
                    <div className="movie-content">
                        <Link to={'movie-detail/' + this.props.movie.id} ><p className="title">{this.props.movie.title.length >= 15 ? this.props.movie.title.slice(0, 15) + "..." : this.props.movie.title}</p></Link>
                        <div className="movie-bottom">
                            <span className="add-favorite">
                                <i onClick={(e) => this.props.addCard(this.props.movie, e)}
                                    className="fa fa-heart"
                                    style={!this.props.favorites.find(f => f.id === this.props.movie.id) ? { color: "#C0CADB" } : { color: "#F0353B" }}
                                    aria-hidden="true"></i>
                            </span>
                            <span className="raiting">
                                {
                                    this.state.average.map(index => (

                                        <i key={index} className="fa fa-star" aria-hidden="true"></i>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
