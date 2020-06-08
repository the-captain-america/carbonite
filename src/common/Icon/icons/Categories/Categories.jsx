/* eslint-disable react/prop-types */
import React from 'react';
const Icon = props => {
	const { fill = '#9592A8' } = props;
	return (
		<svg width="20px" height="20px" viewBox="0 0 20 20">
			<g
				id="Icons/ico-categories"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<path
					d="M7.51,11.49 C8.062,11.49 8.51,11.938 8.51,12.49 L8.51,17 C8.51,17.553 8.062,18 7.51,18 L3,18 C2.448,18 2,17.553 2,17 L2,12.49 C2,11.938 2.448,11.49 3,11.49 L7.51,11.49 Z M7.01,12.99 L3.5,12.99 L3.5,16.5 L7.01,16.5 L7.01,12.99 Z M17.246,14.5 C17.661,14.5 17.996,14.836 17.996,15.25 L17.996,15.25 L17.9891684,15.3517257 C17.9396111,15.7176667 17.6264167,16 17.246,16 L17.246,16 L10.746,16 C10.332,16 9.996,15.664 9.996,15.25 C9.996,14.836 10.332,14.5 10.746,14.5 L10.746,14.5 Z M17.246,9.248 C17.661,9.248 17.996,9.584 17.996,9.998 L17.996,9.998 L17.9891684,10.0997257 C17.9396111,10.4656667 17.6264167,10.748 17.246,10.748 L17.246,10.748 L10.746,10.748 C10.332,10.748 9.996,10.412 9.996,9.998 C9.996,9.584 10.332,9.248 10.746,9.248 L10.746,9.248 Z M7.51,2 C8.062,2 8.51,2.448 8.51,3 L8.51,7.51 C8.51,8.062 8.062,8.51 7.51,8.51 L3,8.51 C2.448,8.51 2,8.062 2,7.51 L2,3 C2,2.448 2.448,2 3,2 L7.51,2 Z M7.01,3.5 L3.5,3.5 L3.5,7.01 L7.01,7.01 L7.01,3.5 Z M17.246,4 C17.661,4 17.996,4.336 17.996,4.75 C17.996,5.164 17.661,5.5 17.246,5.5 L10.746,5.5 C10.332,5.5 9.996,5.164 9.996,4.75 C9.996,4.336 10.332,4 10.746,4 L17.246,4 Z"
					id="Combined-Shape"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default Icon;
