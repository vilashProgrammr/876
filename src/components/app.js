import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MovieList from '../containers/movie_list';
import Logo from '../components/logo';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
