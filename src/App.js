import React from 'react';
import './style.css';

export default function App() {
  //array to filter
  let names = ['deepak', 'amisha', 'abu bakr', 'piyush', 'ashneer', 'rahul'];
  // filter method ,returns array that passes a condition in function
  // we have to store filter method in a var
  let filtered = names.filter((name) => {
    return name.indexOf('d') ==!-1;
    // ddont return the value thhat dodnt exist
  });
  console.log(filtered);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
