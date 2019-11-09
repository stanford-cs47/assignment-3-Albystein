import React, { useEffect } from "react";
import {
	SafeAreaView,
	View,
	Image,
	StyleSheet,
	Text,
	AsyncStorage,
	TouchableOpacity,
} from "react-native";

import images from "../Themes/Images";
import metrics from "../Themes/Metrics";

const OnBoardingScreen = props => {
	shouldShowOnBoarding = async () => {
		try {
			shouldLoadOnBoarding = await AsyncStorage.getItem(
				"shouldLoadOnBoarding"
			);

			if (shouldLoadOnBoarding === "false") {
				props.navigation.navigate("Home");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		shouldShowOnBoarding();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image
					source={images.logo}
					style={styles.logo}
					resizeMode="contain"
				/>
				<Text>All News that's fit to print!</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.missionStatement}>
					Our mission is simple: We seek the truth and help people
					understand the world. This mission is rooted in our belief
					that great journalism has the power to make each reader's
					life richer and more fulfilling, and all of society stronger
					and more just.
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigation.navigate("Home")}>
					<Text style={styles.buttonText}>CONTINUE</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		height: metrics.screenHeight * 0.1,
		width: metrics.screenWidth * 0.8,
	},
	header: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 2,
		justifyContent: "flex-start",
		paddingHorizontal: metrics.marginHorizontal,
	},
	missionStatement: {
		textAlign: "center",
	},
	buttonContainer: {
		flex: 1,
		alignSelf: "center",
	},
	button: {
		backgroundColor: "#ff7a8a",
		padding: 16,
		borderRadius: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 22,
	},
});

export default OnBoardingScreen;
