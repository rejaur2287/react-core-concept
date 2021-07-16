import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = [
    'Rojalin Islam',
    'Rumaisha Islam',
    'Rejaur Rahman',
    'Refayetur Rahman',
    'Mahibur Rahman',
    'Al-Amin Chowdhury',
  ];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$109.99' },
    { name: 'Adobe Reader', price: '$60.99' },
    { name: 'Premier El', price: '$249.99' },
  ];
  // const productNames = products.map((product) => product.name);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
          {/* <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li>
          <li>{names[3]}</li>
          <li>{names[4]}</li> */}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {/* <Person name="Munna" job="Football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person> */}
        {/* <Person name={names[0]} food="Fuchka"></Person>
        <Person name="Rumaisha Islam" food="Faluda"></Person>
        <Person name="Rejaur Rahman" food="Hamba"></Person>
        <Person name="Refayetur Rahman" food="Chicken"></Person> */}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   // const newCount = count + 1;
  //   setCount(count + 1);
  // };
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
// function Person(props) {
//   const personStyle = {
//     border: '2px solid tomato',
//     margin: '10px',
//     padding: '20px',
//   };
//   console.log(props);
//   return (
//     <div style={personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Favorite Food: {props.food} </h3>
//     </div>
//   );
// }
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>

      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
  };
  const { name, price } = props.product;
  // const { name, price } = { name: 'Photoshop', price: '$90.99' };

  // console.log(name, price);
  return (
    <div style={productStyle}>
      {/* <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4> */}
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div
      style={{
        border: '2px solid tomato',
        margin: '10px',
        padding: '20px',
        width: '300px',
      }}
    >
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  );
}

export default App;
