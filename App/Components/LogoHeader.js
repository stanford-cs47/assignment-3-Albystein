import React from "react";
import { View, Image, StyleSheet } from "react-native";

import images from "../Themes/Images";
import Metrics from "../Themes/Metrics";

const LogoHeader = () => (
	<View style={styles.container}>
		<Image source={images.logo} style={styles.logo} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginBottom: Metrics.doubleBaseMargin,
	},
	logo: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.1,
	},
});

export default LogoHeader;
