import React from 'react';
import styles from './style.module.scss';

type LabelProps = {
  data: string,
  variant?: string
};

export const Label = ({data, variant = 'grey'}: LabelProps) => {
  return <span className={`${styles.status_label} ${variant ? variant : ''}`}>{data}</span>
}