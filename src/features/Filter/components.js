import React from 'react';
import { isNotDefined } from '../../utils';

const Bar = () => <div>Bar</div>;

const Categoryfields = () => {
	return (
		<div>
			<h1>Category Fields</h1>
		</div>
	);
};
const CutsomFields = () => {
	return (
		<div>
			<h1>Custom Fields</h1>
		</div>
	);
};

const Components = {
	categoryfields: Categoryfields,
	cutsomFields: CutsomFields
};

export default block => {
	if (!isNotDefined(Components[block.component])) {
		return React.createElement(Components[block.component], {
			key: block._uid,
			block: block
		});
	}
	return React.createElement(
		() => <div>The component {block.component} has not been created yet.</div>,
		{ key: block._uid }
	);
};
