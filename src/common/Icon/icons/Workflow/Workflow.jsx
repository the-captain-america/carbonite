/* eslint-disable react/prop-types */
import React from 'react';
const Icon = props => {
	const { fill = '#9592A8' } = props;
	return (
		<svg width="20px" height="20px" viewBox="0 0 20 20">
			<g
				id="Icons/ico-workflow"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<path
					d="M7,7 C7.552,7 8,7.448 8,8 L8,8 L8,9.25 L12,9.25 L12,8 C12,7.448 12.448,7 13,7 L13,7 L17,7 C17.552,7 18,7.448 18,8 L18,8 L18,12 C18,12.553 17.552,13 17,13 L17,13 L13,13 C12.448,13 12,12.553 12,12 L12,12 L12,10.75 L8,10.75 L8,12 C8,12.553 7.552,13 7,13 L7,13 L3,13 C2.448,13 2,12.553 2,12 L2,12 L2,8 C2,7.448 2.448,7 3,7 L3,7 Z M16.5,8.5 L13.5,8.5 L13.5,11.5 L16.5,11.5 L16.5,8.5 Z M6.5,8.5 L3.5,8.5 L3.5,11.5 L6.5,11.5 L6.5,8.5 Z"
					id="Combined-Shape"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default Icon;
