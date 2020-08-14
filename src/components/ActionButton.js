import React from 'react';

export const ActionButton = (props) => (
	<button onClick={props.onClick} className={props.buttonClass}>
		{props.children}
	</button>
);
