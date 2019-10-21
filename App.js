/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Oct, 2018
 */

import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
	Keyboard,
} from "react-native";
import { Images, Colors } from "./App/Themes";
import APIRequest from "./App/Config/APIRequest";

import News from "./App/Components/News";
import Search from "./App/Components/Search";
import LogoHeader from "./App/Components/LogoHeader";
import Filters from "./App/Components/Filters";

export default class App extends React.Component {
	state = {
		loading: true,
		articles: [],
		searchText: "",
		category: "Adventure Sports",
	};

	componentDidMount() {
		this.loadArticles(this.state.category);
	}

	loadArticles = async (searchTerm = "", category = "") => {
		var resultArticles = [];
		if (category === "") {
			resultArticles = await APIRequest.requestSearchPosts(searchTerm);
		} else {
			resultArticles = await APIRequest.requestCategoryPosts(category);
		}

		this.setState({
			loading: false,
			articles: resultArticles,
			searchText: "",
		});
	};

	onChangeText = value => {
		this.setState({ searchText: value });
	};

	onSearch = async () => {
		Keyboard.dismiss();
		if (this.state.searchText != "") {
			this.setState({ loading: true, articles: [] });
			await this.loadArticles(this.state.searchText);
		}
	};

	onChangeFilter = async filter => {
		this.setState({ category: filter, loading: true, articles: [] });
		await this.loadArticles((category = filter));
	};

	render() {
		const { articles, loading, searchText } = this.state;

		let activeComponent = null;

		if (loading) {
			activeComponent = (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<ActivityIndicator size="large" />
				</View>
			);
		} else {
			activeComponent = (
				<News
					articles={articles}
					activeFilter={this.state.category}
					loadArticles={this.loadArticles}
				/>
			);
		}
		return (
			<SafeAreaView style={styles.container}>
				<LogoHeader />
				<Search
					value={searchText}
					onChangeText={this.onChangeText}
					onSearch={this.onSearch}
				/>
				<Filters
					activeFilter={this.state.category}
					setCurrentFilter={filter => this.onChangeFilter(filter)}
				/>
				{activeComponent}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
