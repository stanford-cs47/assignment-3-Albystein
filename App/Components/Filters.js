import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";

import { Metrics, Colors } from "../Themes";

//Just extend this array to add more filters.
const FILTERS = [
	"Adventure Sports",
	"News",
	"Books",
	"Booming",
	"Cars",
	"Culture",
	"Dinig",
	"Business",
];

const Filters = props => (
	<View style={styles.filterContainer}>
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingHorizontal: 8 }}>
			{FILTERS.map((filter, index) => (
				<TouchableWithoutFeedback
					key={`filter-${index}`}
					onPress={() => props.setCurrentFilter(filter)}>
					<View
						style={[
							styles.filter,
							props.activeFilter === filter &&
								styles.activeFilter,
						]}>
						<Text
							style={[
								styles.filterText,
								props.activeFilter === filter &&
									styles.activeText,
							]}>
							{filter}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			))}
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	filterContainer: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	filter: {
		marginRight: 10,
		backgroundColor: "white",
		borderRadius: 50,
		height: Metrics.screenHeight * 0.05,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
		elevation: 0.5,
		marginBottom: 20,
	},
	activeFilter: {
		backgroundColor: "#ff7a8a",
	},
	activeText: {
		color: "white",
	},
	filterText: {
		fontSize: 18,
		color: "#929292",
		paddingHorizontal: 15,
	},
});

export default Filters;
