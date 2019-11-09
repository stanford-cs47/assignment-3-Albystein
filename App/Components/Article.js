import React, { useCallback } from "react";
import {
	View,
	StyleSheet,
	Text,
	Linking,
	TouchableOpacity,
	Image,
} from "react-native";

import { Metrics } from "../Themes";

export default props => {
	const {
		article: { title, byline, snippet, date, url, image },
	} = props;
	const onArticlePress = useCallback(() => {
		props.navigation.navigate("Article", { url });
	}, [url]);

	const newDate = Date(date);

	return (
		<TouchableOpacity onPress={() => onArticlePress(url)}>
			<View style={styles.container}>
				<Text style={styles.articleHeaderText}>{title}</Text>
				{image && (
					<Image
						source={{ uri: image }}
						style={{ height: 100, width: 100 }}
					/>
				)}
				<Text style={styles.articleBodyText}>{snippet}</Text>
				{byline && <Text style={styles.author}>{byline}</Text>}
				<Text style={styles.date}>{newDate}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Metrics.marginHorizontal,
		marginVertical: Metrics.marginVertical,
	},
	articleHeaderText: {
		fontSize: 24,
		color: "#000",
		marginBottom: 8,
	},
	articleBodyText: {
		fontSize: 16,
		color: "gray",
	},
	author: {
		marginVertical: Metrics.marginVertical,
	},
});
