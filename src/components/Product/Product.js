import styles from './Product.module.scss';
import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductOptions from './ProductOptions';


const Product = props => {
  const [currentColor, setCurrentColor]  = useState(props.colors[0])
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    return(props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  }

  const addToCart = event => {
    event.preventDefault();
    console.log("Sumarry \n-------------");
    console.log("Name: ", props.title);
    console.log('Price: ', getPrice());
    console.log('Color: ', currentColor)
    console.log('Size: ', currentSize)
  }

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} title={props.title} name={props.name}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          addToCart={addToCart}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  //displayEle: PropTypes.element,
  basePrice: PropTypes.number, 
  colors: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  name: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    additionalPrice: PropTypes.number,
    name: PropTypes.string
  })),
  title: PropTypes.string,
};

export default Product;