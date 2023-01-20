import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import EnterExpense from "./EnterExpense";

export default function App() {
	return (
		<SafeAreaView style={styles.baseText}>
			<Text style={styles.titleText}>Pocket Financial Helper</Text>
			<EnterExpense />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

const styles = StyleSheet.create({
	baseText: {
		fontFamily: "Cochin",
	},
	titleText: {
		fontSize: 30,
		fontWeight: "bold",
		// marginTop: 45,
		marginLeft: 10,
	},
});
