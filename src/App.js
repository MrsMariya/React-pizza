import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://62cef9f4826a88972d06f45e.mockapi.io/items')
    .then((res) => setItems(res.data))
  }, [])

  return (
    <div className="wrapper">
      <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            items.map(({title, price, imageUrl, sizes, types, id}) => (
              <PizzaBlock  
                key={id}
                title={title} 
                price={price} 
                image={imageUrl}
                sizes={sizes}
                type={types}
              />
            ))
          }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
