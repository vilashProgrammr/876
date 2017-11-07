import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    const movie = this.props.movie;

    let movieButton;
    if (movie.Website !== 'N/A'){
      movieButton = <a href={movie.Website} className="btn">View website</a>
    }

    return (
      <article className="movie" style={{backgroundImage: `url(${movie.Poster})`}}>
        <section className="movie-poster">
            <img src={movie.Poster} alt="Poster" />
        </section>
        <section className="movie-content">
          <h1>{movie.Title}</h1>
          <div className="runtime-genre">
            <span className="genre">{movie.Genre}</span>
            <span className="runtime">{movie.Runtime}</span>
          </div>
          <div className="rating">
            <p>IMDB: {movie.imdbRating}</p>
          </div>
          <div className="plot">
              <p>{movie.Plot}</p>
          </div>
          {movieButton}
          <a className="remove-movie" href="javascript:" onClick={this.props.onRemoveClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        </section>
      </article>
    )
  }
}
