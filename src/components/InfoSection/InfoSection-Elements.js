import styled from "styled-components";

export const InfoSec = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 90vh;
	overflow: hidden;
	color: #fff;
	padding: 10vh 0;
	background: ${(props) => (props.lightBg ? "#fff" : "#101522")};

	@media screen and (max-width: 768px) {
		padding: 60px 0;
	}
`;

export const InfoRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	align-items: center;
	flex-direction: ${(props) => (props.imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	flex: 1 1 50%;
	max-width: 50%;
	display: flex;
	align-items: center;
	justify-content: center; /* flex-basis: 50%; */
	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 600px;
	padding-top: 0;
	/* padding-bottom: 60px; */

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		text-align: center;
		max-width: 100%;
	}
`;

export const TopLine = styled.div`
	color: ${(props) => (props.lightTopLine ? "#a9b3c1" : "#4B59F7")};
	font-size: 18px;
	line-height: 16px;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
`;
export const Heading = styled.h1`
	white-space: pre-wrap;
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	color: ${(props) => (props.lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
	max-width: 440px;
	text-align: justify;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${(props) => (props.lightTextDesc ? "#a9b3c1" : "#1c2237")};

	@media screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

export const ImgWrapper = styled.div`
	/* max-width: 555px; */
	display: flex;
	justify-content: ${(props) => (props.start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
