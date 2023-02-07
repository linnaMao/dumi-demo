import React from 'react';
import styles from './index.less';

const Demo = ({ name }) => {
  return <div className={styles.demo}>{name}</div>;
};

export default Demo;
