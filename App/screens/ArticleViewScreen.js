import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const ArticleView = props => {
	const { url } = props.navigation.state.params;
	return (
		<SafeAreaView style={styles.container}>
			<WebView source={{ uri: url }} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ArticleView;
