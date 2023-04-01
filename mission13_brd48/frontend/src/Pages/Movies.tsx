import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [ListOMovies] = useState(mds);

  // const addMovie = () => {
  //   setListOMovies([
  //     ...mds,
  //     {
  //       MovieId: 6,
  //       Category: 'Drama',
  //       Title: 'Departed, The',
  //       Year: 1988.660436,
  //       Director: 'Martin Scorsese',
  //       Rating: 'R',
  //     },
  //   ]);
  // };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {ListOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary">Add Movie</button>
    </>
  );
}

export default MovieList;
