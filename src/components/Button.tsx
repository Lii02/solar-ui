import styles from './components.module.css';
import { BoxProps } from './Box';
import * as React from 'react';

export interface ButtonProps extends BoxProps {
	label: string;
	onClick?: () => void;
}

export default function Button(props: ButtonProps) {
	return (
		<button className={styles.solar_button} onClick={props.onClick}>
			{props.label}
		</button>
	);
}
