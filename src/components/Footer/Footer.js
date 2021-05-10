import React from "react";
import { Button } from "../../GlobalStyles";
import {
	FooterContainer,
	FooterSubHeading,
	FooterSubText,
	FooterSubscription,
	Form,
	FormInput,
	FooterLink,
	FooterLinkTitle,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItems,
	SocialMedia,
	SocialIconLink,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	SocialIcons,
	WebSiteRights,
} from "./Footer-Elements";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

function Footer() {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput
						name="email"
						type="email"
						placeholder="Your Email..."
					></FormInput>
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>Abous us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Inverstors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Contact us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Inverstors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Videos</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Inverstors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Inverstors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						Ultra
					</SocialLogo>
					<WebSiteRights>Ultra © 2021</WebSiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href="/"
							target="_blank"
							aria-label="Youtube"
							rel="noopener noreferr"
						>
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
}

export default Footer;
