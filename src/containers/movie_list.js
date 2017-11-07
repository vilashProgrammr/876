import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { removeMovie } from '../actions/index';
import Movie from './movie';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.renderMovie = this.renderMovie.bind(this);
  }

  onRemoveClick(movie) {
    this.props.removeMovie(movie);
  }

  renderMovie(movie) {
    return (
      <div key={movie.imdbID} className="col-xs-6 col-md-4">
        <Movie movie={movie}
        onRemoveClick={this.onRemoveClick.bind(this, movie)} />
      </div>
    )
  }

  render() {
    return (
        <section className="movie-list-section">
          <div className="row">
              {this.props.movies.map(this.renderMovie)}
          </div>
        </section>
    )
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
