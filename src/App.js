import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CardDetail from './components/card/CardDetail';
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';
import NotFound from './components/other/NotFound';
import alertify from 'alertifyjs'


export default class App extends Component {
  state = {
    movies: [],
    weekTrendMovie: [],
    dayTrendMovie: [],
    favorites: [],
    searchResults: []
  }
  getMovies = (p) => {
    if (!p) {
      p = 1
      let moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=41a41718a92ee730c6e863cf1bdc23fb&sort_by=popularity.desc&page=${p}`
      fetch(moviesURL)
        .then(response => response.json())
        .then(response => this.setState({ movies: response.results }))
    }
    else {
      let moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=41a41718a92ee730c6e863cf1bdc23fb&sort_by=popularity.desc&page=${p}`
      fetch(moviesURL)
        .then(response => response.json())
        .then(response => this.setState({ movies: response.results }))
    }
  }
  getWeekTrendMovies = () => {
    let moviesURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=41a41718a92ee730c6e863cf1bdc23fb"
    fetch(moviesURL)
      .then(response => response.json())
      .then(response => this.setState({ weekTrendMovie: response.results }))
  }
  getDayTrendMovies = () => {
    let moviesURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=41a41718a92ee730c6e863cf1bdc23fb"
    fetch(moviesURL)
      .then(response => response.json())
      .then(response => this.setState({ dayTrendMovie: response.results }))
  }
  getSearchMovies = (query, e) => {
    e.preventDefault();
    if (query) {
      let moviesURL = `https://api.themoviedb.org/3/search/movie?api_key=41a41718a92ee730c6e863cf1bdc23fb&query=${query}`
      fetch(moviesURL)
        .then(response => response.json())
        .then(response => this.setState({ searchResults: response.results }))
      
    }
    else {
      alertify.error("Enter the search text")
    }
  }

  addCard = (movie, e) => {
    let newFavorite = this.state.favorites;
    let addedItem = newFavorite.find(f => f.id === movie.id)

    if (!addedItem) {
      newFavorite.push(movie);
      localStorage.setItem("newFavorite", JSON.stringify(newFavorite));
      alertify.success(movie.title + " added to favorites", 2)
    }
    else {
      newFavorite.forEach((movie, index) => {
        if (addedItem === movie) {
          newFavorite.splice(index, 1);
          localStorage.setItem("newFavorite", JSON.stringify(newFavorite));
          alertify.error(movie.title + " deleted from favorites", 2)
        }
      })
    }
    this.setState({ favorites: newFavorite })
  }
  getMoviesFromStorage = () => {
    if (localStorage.getItem("newFavorite") === null) {
      localStorage.clear()
    }
    else{
      let newFavorite = JSON.parse(localStorage.getItem("newFavorite"));
      this.setState({ favorites: newFavorite })
    }
  }

  componentDidMount() {
    this.getMovies()
    this.getWeekTrendMovies()
    this.getDayTrendMovies()
    this.getMoviesFromStorage()
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={
          (props) => (
            <Home
              {...props}
              movies={this.state.movies}
              favorites={this.state.favorites}
              addCard={this.addCard}
              getSearchMovies={this.getSearchMovies}
              weekTrendMovie={this.state.weekTrendMovie}
              dayTrendMovie={this.state.dayTrendMovie}
              getMovies={this.getMovies}
              searchResults={this.state.searchResults}
            />
          )
        } />
        <Route path='/movie-detail/:id' render={
          (props) => (
            <CardDetail
              {...props}
              movies={this.state.movies}
            />
          )
        } />
        <Route path='/favorites' render={
          (props) => (
            <Favorites
              {...props}
              favorites={this.state.favorites}
              addCard={this.addCard}
              title="Favorites"
            />
          )
        } />
      

        <Route component={NotFound} />
      </Switch>

    )
  }
}