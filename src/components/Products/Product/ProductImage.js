import styles from './ProductForm/Product.module.scss';
import React from 'react';

const ProductImage = props => {
    return(
        <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
      </div>
    );
};

export default ProductImage;