import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://62cef9f4826a88972d06f45e.mockapi.io/items')
    .then((res) => setItems(res.data))
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
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
    </>
  )
}

export default Main;