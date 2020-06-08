import React, { useState, useEffect } from 'react';
import { Modal, Overlay } from '../Basic/Basic';

const ModalUI = ({ isActive, children, onClose = () => {} }) => {
	// const [localActive, setLocalActive] = useState(false);

	// const onClose = () => {
	//   setLocalActive(false);
	// };

	// useEffect(() => {
	//   setLocalActive(isActive);
	// }, [isActive]);

	return (
		<>
			<Modal isActive={isActive}>
				<button className="close" onClick={onClose}>
					Close
				</button>
				{children}
			</Modal>
			<Overlay isActive={isActive} onClick={onClose} />
		</>
	);
};

export default ModalUI;
