import React from 'react';
import Breed from './Breed'; // Імпортуємо компонент для відображення породи
import getId from './helpers'; // Імпортуємо функцію getId з helpers.js

const Content = ({ breeds, loading, loadBreeds }) => {
  return (
    <section className="content">
      <h2>Dog Breeds List</h2>
      <button onClick={loadBreeds}>Reload Breeds</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {breeds.map((breed, index) => {
            return <Breed key={getId('breed')} breed={breed} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Content;
