# ¡Bienvenid@s a Platzi Video!
Una aplicación desarrollada en React js para el Curso Práctico de React JS en Platzi


![Vista final](./documentation/platzi-video-vista-final.gif)


```
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';
const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Sin resultados...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      {initialState.trends.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}

          </Carousel>
        </Categories>
      )}

      {initialState.originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}

          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};
export default App;
```