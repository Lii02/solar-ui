import styles from './components.module.css';
import * as React from 'react';

export interface BoxProps {
	children?: React.ReactNode;
}

export default function Box(props: BoxProps) {
	return <div className={styles.solar_box}>{props.children}</div>;
}
