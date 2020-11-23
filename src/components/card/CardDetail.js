import React, { Component, Fragment } from 'react';
import PageHeader from '../header/PageHeader'

class CardDetail extends Component {


    render() {
        const id = Number(this.props.match.params.id);
        const movie = this.props.movies.filter(m => m.id === id);
        return (
            <div style={{ minHeight:'100vh',padding:'1rem'}}>
                <div className="container card-detail">
                    <PageHeader title="Movie Detail" />
                    {
                        movie.map(movie => (
                            <Fragment key={movie.id}>
                                <div className="row mt-4" >
                                    <div className="col-md-7">
                                        <div className="detail-img">
                                            <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="img-responsive detail-img" alt="" />
                                            <div className='overflow'>
                                                <i className="fa fa-play" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="name">
                                            <span>Name: </span>
                                            <span>{movie.title}</span>
                                        </div>

                                        <div className="overview">
                                            <span>Overwiew: <br /></span>

                                            <span>{movie.overview}</span>
                                        </div>

                                        <div className="releasedate">
                                            <span>Release Date:  </span>
                                            <span>{movie.release_date}</span>
                                        </div>

                                        <div className="originallanguage">
                                            <span>Movie Language:  </span>
                                            <span>{movie.original_language.toUpperCase()}</span>
                                        </div>
                                        <div className="popularity">
                                            <span>Raiting:  </span>
                                            <span>{movie.vote_average}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default CardDetail;
