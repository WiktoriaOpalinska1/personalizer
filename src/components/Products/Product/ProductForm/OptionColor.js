import styles from './Product.module.scss';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const OptionColor = props => {
    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      };

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color} onClick={() => {props.setCurrentColor(color)}}><button type="button" className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)}></button></li>)}
            </ul>
          </div>
    );
};

OptionColor.propTypes = {
  //displayEle: PropTypes.element,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.shape({
    additionalPrice: PropTypes.number,
    name: PropTypes.string
  })),
};

export default OptionColor;