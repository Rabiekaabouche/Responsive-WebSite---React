import React from "react";
import { Container, Button } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from "./InfoSection-Elements";

function InfoSection({
	lightBg,
	imgStart,
	lightTopLine,
	lightTextDesc,
	buttonLabel,
	description,
	headLine,
	lightText,
	primary,
	topLine,
	start,
	img,
	alt,
}) {
	return (
		<InfoSec lightBg={lightBg}>
			<Container>
				<InfoRow imgStart={imgStart}>
					<InfoColumn data-aos="fade-down">
						<TextWrapper>
							<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
							<Heading lightText={lightText}>{headLine}</Heading>
							<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
							<Link to="/sign-up">
								<Button big fontBig primary={primary}>
									{buttonLabel}
								</Button>
							</Link>
						</TextWrapper>
					</InfoColumn>
					<InfoColumn data-aos="zoom-in">
						<ImgWrapper start={start}>
							<Img src={img} alt={alt}></Img>
						</ImgWrapper>
					</InfoColumn>
				</InfoRow>
			</Container>
		</InfoSec>
	);
}

export default InfoSection;
