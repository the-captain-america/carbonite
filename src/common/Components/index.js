import styled, { css } from 'styled-components';

const Button = styled.button`
	padding: 6px;
	background: white;
	box-sizing: border-box;
	font-size: 16px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Roboto', sans-serif;
	&:focus {
		outline: none;
	}
	span.text {
		padding-left: 8px;
		color: #9592a8;
	}
`;

const Image = styled.img`
	max-width: 300px;
	display: block;
	height: auto;
	cursor: pointer;
	${props =>
		props.isLarge &&
		css`
			max-width: 500px;
			width: 100%;
			position: fixed;
			left: -50%;
			top: 50%;
			transform: translate(-50%, -50%);
		`}
`;

export { Button, Image };
