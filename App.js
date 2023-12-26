import { StatusBar } from "expo-status-bar";
import Card from "./comp/Card";
import styled from "styled-components/native";
import { Platform } from "react-native";

export default function App() {
	const pokemonDats = [
		{
			name: "Charmander",
			image: require("./assets/charmander.png"),
			type: "fire",
			hp: "39",
			moves: ["Scratch", "Ember", "Fire Spin", "Flamethrower"],
			weakness: ["Water", "Ground", "Rock"],
		},
	];
	return (
		<AppView>
			<StatusBar style="auto" />
			{pokemonDats.map((pokemon, key) => (
				<Card
					{...pokemon}
					key={key}
				/>
			))}
		</AppView>
	);
}

const AppView = styled.SafeAreaView`
	flex: 1;
	background-color: #f5f5f5;
	padding: 0 24px;
	padding-top: ${Platform.OS === "android" ? "25px" : "0px"};
`;
