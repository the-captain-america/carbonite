import styled, { css, keyframes } from 'styled-components';
import Theme from '../Theme';

const drift = keyframes`
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	h1,
	h2,
	h3 {
		margin-top: 0;
	}
`;

const Background = styled.div`
	background: #eafefc;
	width: 100%;
	padding: 24px;
	box-sizing: border-box;
	height: 100%;
`;

const Button = styled.button`
	border: none;
	background: #83c1c7;
	border-radius: 8px;
	padding: 12px;
	color: white;
	font-size: 15px;
	box-sizing: border-box;
	${props =>
		props.width &&
		css`
			width: ${props.width};
		`}
	&:focus {
		outline: none;
	}
	&.square {
		background: #83c1c7;
		color: white;
	}
	&:hover {
		background: #83c1c7;
		cursor: pointer;
	}
`;

const Circle = styled.div`
	width: 100px;
	height: 100px;
	min-width: 100px;
	border-radius: 16px;
	overflow: hidden;
	background: #e8aea2;
	padding: 16px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		font-size: 16px;
		margin: 0;
	}
`;

const Modal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 24px;
	width: 60%;
	height: 60%;
	background: white;
	border-radius: 16px;
	z-index: 999;
	display: none;
	${props =>
		props.isActive &&
		css`
			display: block;
		`}
	button.close {
		background: none !important;
		border: none;
		outline: none;
		text-align: center;
		position: absolute;
		right: 16px;
		top: 16px;
		font-weight: normal !important;
		color: black !important;
	}
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 998;
	background: rgba(0, 0, 0, 0.2);
	display: none;
	${props =>
		props.isActive &&
		css`
			display: block;
		`}
`;

const Creative = styled.div`
	position: fixed;
	/* bottom: 0; */
	top: 0;
	left: 0;
	width: 100%;
	height: 200px;
	/* transform: rotate(180deg); */
	.box {
		width: 100%;
		height: 300px;
		border-radius: 5px;
		box-shadow: 0 2px 30px rgba(black, 0.2);
		background: lighten(#f0f4c3, 10%);
		position: relative;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}
	.wave {
		opacity: 0.4;
		position: absolute;
		top: 3%;
		left: 50%;
		background: #f3aaa0;
		width: 500px;
		height: 500px;
		margin-left: -250px;
		margin-top: -250px;
		transform-origin: 50% 48%;
		border-radius: 43%;
		animation: ${drift} 3000ms infinite linear;
	}
	.wave.-three {
		animation: ${drift} 5000ms infinite linear;
	}
	.wave.-two {
		animation: ${drift} 7000ms infinite linear;
		opacity: 0.1;
		background: #5d646f;
	}
	.box:after {
		content: '';
		display: block;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(#e8a, 1),
			rgba(#def, 0) 80%,
			rgba(white, 0.5)
		);
		z-index: 11;
		transform: translate3d(0, 0, 0);
	}
	.title {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 1;
		line-height: 300px;
		text-align: center;
		transform: translate3d(0, 0, 0);
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.4em;
		font-size: 24px;
		text-shadow: 0 1px 0 rgba(black, 0.1);
		text-indent: 0.3em;
	}
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 8px;
  background: #e8aea2;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  h1 {
    text-align: center;
  }
  ${props =>
		props.justify &&
		css`
			justify-content: ${props.justify};
		`}
  ${props =>
		props.verticalPush &&
		css`
			margin-top: ${props.verticalPush};
		`}
  ${props =>
		props.bgColor &&
		css`
			background: ${props.bgColor};
		`}
    ${props =>
			props.zIndex &&
			css`
				position: fixed;
				bottom: 20px;
				left: -50%;
				transform: translate(50%);
				width: 100%;
				z-index: ${props.zIndex};
			`}
  ${props =>
		props.height &&
		css`
			height: ${props.height}px;
		`}
`;

const Container = styled.div`
	background: white;
	width: 100%;
	height: calc(100% - 32px);
	overflow: auto;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	padding: 24px;
	box-sizing: border-box;
	align-items: flex-start;
	font-family: ${Theme.font.fontFamily};
	${props =>
		props.column &&
		css`
			flex-direction: column;
			box-sizing: border-box;
			margin-left: auto;
			margin-right: auto;
			max-width: 580px;
			width: 100%;
			padding: 24px 24px 24px 24px;
		`}
	${props =>
		props.left &&
		css`
			flex-direction: row;
			padding: 0;
		`}
	button {
		border: none;
		background: #83c1c7;
		border-radius: 8px;
		padding: 12px;
		color: white;
		font-size: 15px;
		&:focus {
			outline: none;
		}
		&.square {
			background: #83c1c7;
			color: white;
		}
		&:hover {
			background: #83c1c7;
			cursor: pointer;
		}
	}
	span {
		white-space: nowrap;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	input {
		width: 100%;
		padding: 16px;
		border-radius: 8px;
		background: white;
		border: none;
		font-size: 16px;
		margin-top: 16px;
		line-height: 20px;
		background: #f5f5f8;
		font-family: 'Montserrat', sans-serif;

		&:focus {
			outline: none;
		}
		p {
			margin-top: 0 !important;
			margin-bottom: 8px !important;
		}
		box-sizing: border-box;
	}

	section {
		height: 100%;
		width: 200px;
		background: white;
		padding: 16px 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		ul {
			padding-left: 24px;
		}
	}
	main {
		height: 100%;
		background: #dbeaf0;
		padding: 24px;
		width: calc(100% - 200px);
		overflow: scroll;
		margin-bottom: 64px;
		h1,
		p {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	h1 {
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 24px;
		font-size: 20px;
		padding: 0;
		position: relative;
	}
	h2 {
		width: 100%;
		box-sizing: border-box;
		font-size: 18px;
		padding: 0;
		display: inline-block;
		position: relative;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		box-sizing: border-box;
		margin-top: 16px;
	}
	li {
		display: block;
		width: 100%;
		font-weight: 600;
		width: 100%;
		box-sizing: border-box;
		padding: 8px;
		text-align: left;
		position: relative;
		a {
			font-weight: normal;
		}
		&.is-active {
			a {
				font-weight: 600;
			}
			&:after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				width: 3px;
				height: 100%;
				background: #e8aea2;
			}
		}
		&.last {
			margin-top: auto;
		}
		a {
			color: black;
			text-decoration: none;
			&:hover {
				color: black;
			}
		}
	}
`;

const Row = styled.div`
	background: white;
	width: 100%;
	box-sizing: border-box;
	padding: 16px;
	display: flex;
	border-radius: 8px;
	overflow: hidden;
	align-items: center;
	margin-top: 8px;
	&:hover {
		cursor: pointer;
		background: #f1eeea;
	}
	h2 {
		font-size: 16px;
		margin: 0;
		padding: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 150px;
		max-width: 150px;
	}
	span {
		margin-left: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export {
	Row,
	Button,
	Creative,
	Container,
	Overlay,
	Modal,
	Circle,
	Content,
	Block,
	Background
};
