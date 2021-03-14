import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Banner from './elements/Banner';
import Footer from './components/Footer';
import ShoppingKart from './components/Productos';
import getProductos from './api';
import Newsletter from './components/Newsletter';

const App = () => {
  const [productos, setProductos] = useState([]);         //VARIABLE PARA ACCEDER A LOS PRODUCTOS DE LA API

  const fetchProducto = async () => {                     //VARIABLE QUE RECIBE LOS PRODUCTOS DE LA API
      try {
          const newData = await getProductos();
          setProductos(newData);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {                           
      fetchProducto();
  }, []);


  const valorContador = localStorage.getItem('cantidad') ? localStorage.getItem('cantidad') : 0 ; 
  // CONTADOR PARA MOSTRAR LOS PRODUCTOS EN PANTALLA
  // console.log(valorContador);

  const [contador, setContador] = useState(Number(valorContador));          //VARIABLE PARA ESTABLECER LA CANTIDAD DE PRODUCTOS EN EL CARRITO
  // console.log(contador);

  useEffect(() => {
    localStorage.setItem('cantidad', contador);           //GUARDAMOS LA CANTIDAD DE PRODUCTOS SELECCIONADOS EN EL LOCALSTORAGE

  },[contador])


  const agregarProducto = (idProducto) =>{              // VARIABLE QUE RECIBE EL CAMBIO DE CANTIDAD DE PRODUCTOS SELECCIONADOS

    if(idProducto){
      setContador(contador + 1);            
      // console.log(contador);
    }
  }

  return (
    <>
      <Header contador={contador} />
      <Banner />

      <ShoppingKart productos={productos} agregarProducto={agregarProducto}/>

      <Newsletter />

      <Footer />
    </>
  );
}
 
export default App;