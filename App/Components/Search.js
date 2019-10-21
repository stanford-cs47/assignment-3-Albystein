/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Oct, 2018
 */

import React, { Component } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
	StyleSheet,
	View,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Metrics, Colors } from "../Themes";

export default class Search extends Component {
	render() {
		const { onChangeText, onSearch, value } = this.props;
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="Search for News"
					onChangeText={onChangeText}
					value={value}
					style={styles.textInput}
				/>
				<TouchableOpacity
					style={styles.searchButton}
					onPress={onSearch}>
					<FontAwesome name="search" size={24} color="#ff7a8a" />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#eeeeee",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		marginHorizontal: Metrics.marginHorizontal,
		paddingHorizontal: Metrics.paddingHorizontal,
		marginBottom: 8,
	},
	textInput: {
		flex: 0.9,
		fontSize: 16,
		height: Metrics.screenHeight * 0.07,
	},
	searchButton: {
		padding: Metrics.padding,
	},
});
