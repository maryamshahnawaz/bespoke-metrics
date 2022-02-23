import React from 'react';

const Member = ({ member, handleRemove, ratingChanged }) => {
 const { id, name, age, activities, rating } = member;
 return (
  <div key={id} className="person-details">
   <h1>Member: {name}</h1>
   <span>Age: {age}</span>
   <br />
   <span>Ratings: {rating} </span>
   <p> Last Three Activities: {activities.map((list, key) => {
    return <li key={key}>{list}</li>
   })}
   </p>
   <button type="button" onClick={() => handleRemove(id)} className="btn">
    Remove
   </button>
  </div>
 )
}

export default Member;