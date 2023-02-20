import styles from './Product.module.scss';
import clsx from 'clsx';
import React from 'react';

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

export default OptionColor;