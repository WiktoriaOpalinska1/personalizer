import styles from './Product.module.scss';
import React from 'react';
import OptionColor from './OptionColor';
import OptionSize from './OptionSize';
import Button from '../Button/Button';

const ProductOptions = props => {
    return(    
        <form onSubmit={props.addToCart}>
          <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} sizes={props.sizes}/>
          <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} colors={props.colors}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

export default ProductOptions;