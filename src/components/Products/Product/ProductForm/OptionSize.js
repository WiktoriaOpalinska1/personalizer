import styles from './Product.module.scss';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const OptionSize = props => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button onClick={() => {props.setCurrentSize(size.name)}} type="button" className={clsx(styles.sizes, size.name === props.currentSize && styles.active)}>{size.name}</button></li>)}
            </ul>
        </div>
    );
};

OptionSize.propTypes = {
    //displayEle: PropTypes.element, 
    name: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.shape({
      additionalPrice: PropTypes.number,
      name: PropTypes.string
    })),
  };

export default OptionSize;