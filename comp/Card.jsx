import {
	Text,
	StyleSheet,
	Platform,
	useWindowDimensions,
} from "react-native";
import React from "react";
import styled from "styled-components/native";

const Card = ({ name, image, type, hp, moves, weakness }) => {
	const { width } = useWindowDimensions();
	return (
		<CardContainer style={platformShadows.elevation}>
			<ImageComp
				resizeMode="contain"
				accessibilityLabel="Pokemon"
				source={image}
			/>
			<StyledText
				$bold={true}
				$text={24}
			>
				{name}
			</StyledText>
			<StyledText>{hp}</StyledText>
			<StyledText>Type: {type}</StyledText>

			<StyledText $text={12}>
				Moves: {moves.join(", ")}
			</StyledText>
			<StyledText $text={12}>
				Weakness: {weakness.join(", ")}
			</StyledText>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.View`
	background-color: white;
	border: 2px solid black;
	padding: 20px 24px;
	border-radius: 10px;
`;

const StyledText = styled.Text`
	font-size: ${({ $text }) => $text || 16}px;
	font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
`;

const ImageComp = styled.Image`
	width: 100%;
	height: 200px;
`;
const platformShadows = StyleSheet.create({
	elevation: {
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
			},
			android: {
				elevation: 8,
			},
		}),
	},
});
