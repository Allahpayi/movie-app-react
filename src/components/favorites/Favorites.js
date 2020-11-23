import React, { Component } from 'react'
import Card from '../card/Card'
import PageHeader from '../header/PageHeader'



export default class Favorites extends Component {
    render() {
        return (
            <div style={{paddingTop:'2rem', minHeight:"100vh" }}>
                <div className="container">
                {
                    this.props.favorites.length!==0 ?<PageHeader title="Favorites" />:null
                }
                    
                    <div className="row pb-4">
                        {
                            this.props.favorites.length!==0 ? 
                            this.props.favorites.map(movie => (
                                <Card key={movie.id} movie={movie} addCard={this.props.addCard} favorites={this.props.favorites} />
                            )) : this.props.history.goBack()
                        }
                    </div>
                </div>
            </div>
        )
    }
}
