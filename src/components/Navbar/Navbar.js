import React, { useState } from "react";
import {
	Nav,
	NavContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLink,
	NavItem,
	NavButton,
	NavBtnLink,
} from "./Navbar-Elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick((prev) => !prev);
	};

	const closeMenu = () => {
		setClick(false);
	};
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavContainer>
						<NavLogo to="/" onClick={closeMenu}>
							<NavIcon />
							ULTRA
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu clicked={click}>
							<NavItem onClick={handleClick}>
								<NavLink to="/">Home</NavLink>
							</NavItem>
							<NavItem onClick={handleClick}>
								<NavLink to="/">About</NavLink>
							</NavItem>
							<NavItem onClick={handleClick}>
								<NavLink to="/">Services</NavLink>
							</NavItem>
							<NavItem onClick={handleClick}>
								<NavLink to="/">Contact</NavLink>
							</NavItem>
							<NavButton onClick={handleClick}>
								<NavBtnLink primary>SIGN-UP</NavBtnLink>
							</NavButton>
						</NavMenu>
					</NavContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
