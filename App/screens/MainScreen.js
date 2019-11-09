import React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	ActivityIndicator,
	Keyboard,
	AsyncStorage,
} from "react-native";
import APIRequest from "../Config/APIRequest";

import News from "../Components/News";
import Search from "../Components/Search";
import LogoHeader from "../Components/LogoHeader";
import Filters from "../Components/Filters";

export default class MainScreen extends React.Component {
	state = {
		loading: true,
		articles: [],
		searchText: "",
		category: "Adventure Sports",
	};

	componentDidMount() {
		this.removeLoadBoarding();
		this.loadArticles(this.state.category);
	}

	removeLoadBoarding = async () => {
		await AsyncStorage.setItem("shouldLoadOnBoarding", "false");
	};
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
					navigation={this.props.navigation}
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
