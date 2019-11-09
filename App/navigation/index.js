import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ArticleViewScreen from "../screens/ArticleViewScreen";
import MainScreen from "../screens/MainScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";

import images from "../Themes/Images";
import metric from "../Themes/Metrics";

const NavStack = createStackNavigator(
	{
		Home: {
			screen: MainScreen,
			navigationOptions: {
				header: null,
				headerBackTitle: null,
			},
		},
		Article: {
			screen: ArticleViewScreen,
			navigationOptions: {
				headerTitle: (
					<View>
						<Image
							resizeMode="contain"
							style={{
								height: metric.screenHeight * 0.08,
								width: metric.screenWidth * 0.6,
							}}
							source={images.logo}
						/>
					</View>
				),
				headerTitleStyle: {
					alignSelf: "center",
				},
			},
		},
		OnBoarding: {
			screen: OnBoardingScreen,
			navigationOptions: {
				header: null,
			},
		},
	},
	{ initialRouteName: "OnBoarding" }
);

export default createAppContainer(NavStack);
