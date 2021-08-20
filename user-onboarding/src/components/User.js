import React from 'react';


export default function User(props){
  const {username, email} = props.data;
  return (
    <div>
      <h4>Welcome {username}</h4>
      <p>{email}</p>
    </div>
  );
}