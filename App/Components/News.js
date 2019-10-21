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
	SafeAreaView,
	View,
	FlatList,
	RefreshControl,
	Text,
	Linking,
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";

import Article from "../Components/Article";
import Filters from "../Components/Filters";

export default class News extends Component {
	static defaultProps = { articles: [], loadArticles: () => {} };

	static propTypes = {
		articles: PropTypes.array,
		loadArticles: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
		};
	}

	onRefresh = async () => {
		this.setState({ refreshing: true });
		await this.props.loadArticles(this.props.activeFilter);
		this.setState({ refreshing: false });
	};
	render() {
		const { articles } = this.props;
		return (
			<View style={styles.container}>
				<FlatList
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.onRefresh}
						/>
					}
					data={articles}
					keyExtractor={(item, index) => `article-${index}`}
					renderItem={({ item }) => <Article article={item} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
