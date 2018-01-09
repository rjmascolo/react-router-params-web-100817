import React from 'react';
import { connect } from 'react-redux';

const MovieShow = ({ movie }) => {

  return (
    <div>
      <h3>Title: {movie.title}</h3>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)
  return {
    movie
  }
}
export default connect(mapStateToProps)(MovieShow);
