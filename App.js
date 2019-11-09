import React from "react";
import { AsyncStorage } from "react-native";
import NavStack from "./App/navigation";

class App extends React.Component {
	componentDidMount() {
		this.setOnBoardingVal();
	}

	setOnBoardingVal = async () => {
		try {
			shouldLoadOnBoarding = await AsyncStorage.getItem(
				"shouldLoadOnBoarding"
			);

			if (shouldLoadOnBoarding === null) {
				await AsyncStorage.setItem("shouldLoadOnBoarding", "true");
			}
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return <NavStack />;
	}
}

export default App;
