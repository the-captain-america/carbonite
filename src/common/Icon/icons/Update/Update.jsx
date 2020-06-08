/* eslint-disable react/prop-types */
import React from 'react';
const Icon = props => {
	const { fill = '#9592A8' } = props;
	return (
		<svg width="20px" height="20px" viewBox="0 0 20 20">
			<g
				id="Icons/ico-update"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<path
					d="M4.694,5.7542 C4.987,5.4612 5.462,5.4612 5.755,5.7542 L5.755,5.7542 L8.23,8.2292 C8.523,8.5222 8.523,8.9972 8.23,9.2902 C7.937,9.5832 7.462,9.5832 7.169,9.2902 L7.169,9.2902 L5.975,8.0952 L5.975,10.0002 C5.975,12.2192 7.781,14.0252 10,14.0252 C10.414,14.0252 10.75,14.3612 10.75,14.7752 C10.75,15.1892 10.414,15.5252 10,15.5252 C6.954,15.5252 4.475,13.0462 4.475,10.0002 L4.475,10.0002 L4.475,8.0952 L3.28,9.2902 C2.987,9.5832 2.513,9.5832 2.22,9.2902 C1.927,8.9972 1.927,8.5222 2.22,8.2292 L2.22,8.2292 Z M10.0002,4.4748 C13.0462,4.4748 15.5252,6.9538 15.5252,10.0008 L15.5252,10.0008 L15.5252,11.9038 L16.7192,10.7088 C17.0122,10.4158 17.4872,10.4158 17.7802,10.7088 C18.0732,11.0018 18.0732,11.4768 17.7802,11.7698 L17.7802,11.7698 L15.3052,14.2448 C15.0122,14.5378 14.5372,14.5378 14.2442,14.2448 L14.2442,14.2448 L11.7702,11.7698 C11.4772,11.4768 11.4772,11.0018 11.7702,10.7088 C12.0632,10.4158 12.5372,10.4158 12.8302,10.7088 L12.8302,10.7088 L14.0252,11.9028 L14.0252,10.0008 C14.0252,7.7808 12.2192,5.9748 10.0002,5.9748 C9.5862,5.9748 9.2502,5.6388 9.2502,5.2248 C9.2502,4.8108 9.5862,4.4748 10.0002,4.4748 Z"
					id="Combined-Shape"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default Icon;