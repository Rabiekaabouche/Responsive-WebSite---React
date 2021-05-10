import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
	display: flex;
	background-color: black;
	justify-content: center;
	align-items: center;
	height: 10vh;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	height: 80%;
	justify-content: space-between;
`;

export const NavLogo = styled(Link)`
	display: flex;
	align-items: center;
	justify-self: flex-start;
	color: white;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
	cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	font-size: 2rem;

	@media screen and (max-width: 991px) {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex: 1;
	list-style: none;
	padding: 1.2rem;

	@media screen and (max-width: 991px) {
		flex-direction: column;
		justify-content: flex-start;
		align-content: center;
		height: 90vh;
		position: absolute;
		top: 10vh;
		width: 100%;
		left: ${(props) => (props.clicked ? 0 : "-100%")};
		transition: left 500ms ease;
		background-color: #101522;
	}
`;

export const NavItem = styled.li`
	position: relative;
	margin: 0 1.2rem;
	font-size: 1.2rem;

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 0;
		bottom: -20%;
		background-color: white;
		transition: all 500ms ease;
		height: 3px;
	}

	&::before {
		left: 50%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	&::after {
		right: 50%;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	&:hover::before,
	&:hover::after {
		width: 50%;
		transition: width 500ms ease;
	}

	@media screen and (max-width: 991px) {
		width: 100%;

		&::before,
		&::after {
			display: none;
		}
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	height: 100%;
	transition: all 500ms ease;

	&:hover {
		color: #0467fb;
	}

	@media screen and (max-width: 991px) {
		width: 100%;
		text-align: center;
		padding: 2rem;
		display: table;
	}
`;
export const NavButton = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	/* padding: 1.5rem; */

	@media screen and (max-width: 991px) {
		width: 100%;
		padding: 2rem;
	}
`;

export const NavBtnLink = styled(Link)`
	padding: 0.7rem 2rem;
	margin-left: 1rem;
	background-color: ${(props) => (props.primary ? "#4B59F7" : "#0467FB")};
	outline: none;
	border: none;
	cursor: pointer;
	color: white;
	border-radius: 3px;
	font-size: 1.2rem;
	text-decoration: none;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${(props) => (props.primary ? "#0467FB" : "#4B59F7")};
	}

	@media screen and (max-width: 991px) {
		margin: 0;
		width: 80%;
	}
`;
