import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', serif
    }
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 50px;

	@media screen and (max-width: 991px) {
		padding: 0 30px;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${(props) => (props.primary ? "#4B59F7" : "#0467FB")};
	white-space: nowrap;
	padding: ${(props) => (props.big ? "12px 64px" : "10px 20px")};
	color: #fff;
	font-size: ${(props) => (props.fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${(props) => (props.primary ? "#0467FB" : "#4B59F7")};
	}

	@media screen and (max-width: 991px) {
		width: 100%;
	}
`;

export default GlobalStyle;
