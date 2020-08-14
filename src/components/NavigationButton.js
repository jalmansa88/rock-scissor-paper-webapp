import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationButton = (props) => (
	<Link className={props.buttonClass} to={props.path}>
		{props.children}
	</Link>
);
