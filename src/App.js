import React, { useState } from 'react';
import value from "./data.json";
import './App.css';
import Member from "./Member";

function App() {
  const [data, setData] = useState(value);
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');

  // delete function
  const handleRemove = (id) => {
    const newPerson = data.filter((item) => item.id !== id);
    setData(newPerson);
  }

  return (
    <>
      <section className='person wrapper App'>
        <h1 className='heading'>Advendure Club Activities </h1>
        <form action="">
          <input type="text"
            className='Search'
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)} />
        </form>
        <h3 className='heading--small'>Club Members Naming List</h3>
        <section className='person-container'>
          {
            data.filter((val) => {
              if (search === '') {
                return val;

              } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                return val;
              }
            }).map((member) => {
              return (
                <Member
                  member={member}
                  ratingChanged={ratingChanged}
                  handleRemove={handleRemove}
                  rating={rating} />
              )
            })
          }
        </section>
      </section>
    </>
  )



}

export default App
