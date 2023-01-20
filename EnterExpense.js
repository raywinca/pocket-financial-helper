import { View, StyleSheet, Text, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, ButtonGroup, Input } from "@rneui/base";

const categories = ["Grocery", "Dinning", "Clothing", "Other"];

const EnterExpense = () => {
	const [date, setDate] = useState(new Date()); // default to be today
	const [amount, setAmount] = useState(0);
	const [spenseDetails, setSpenseDetails] = useState("");
	const [category, setCategory] = useState(0);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setDate(currentDate);
	};

	const submitExpense = () => {
		Alert.alert(
			`Expense submited:\n $${amount} of ${categories[category]} ${
				spenseDetails ? " - " + `${spenseDetails}` : ""
			} on ${date.toDateString()}`
		);
	};

	const onSelectCategory = (index) => {
		setCategory(index);
		if (index !== 3) {
			setSpenseDetails("");
		}
	};

	return (
		<View>
			<Text style={styles.subHeader}>Please enter your expense</Text>
			<DateTimePicker
				style={{ alignSelf: "left" }}
				testID="dateTimePicker"
				value={date}
				mode={"date"}
				is24Hour={true}
				onChange={onChange}
			/>
			<Input
				onChangeText={setAmount}
				placeholder="Amount"
				value={amount}
				keyboardType="numeric"
				leftIcon={{ type: "font-awesome-5", name: "dollar-sign" }}
			></Input>
			<ButtonGroup
				buttons={["Grocery", "Dinning", "Clothing", "Other"]}
				selectedIndex={category}
				onPress={(index) => {
					onSelectCategory(index);
				}}
				containerStyle={{ marginBottom: 20 }}
			/>
			{category === 3 && (
				<Input
					onChangeText={setSpenseDetails}
					placeholder="Please specify"
					value={spenseDetails}
				/>
			)}
			<Button title="submit" onPress={submitExpense}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	subHeader: {
		backgroundColor: "#2089dc",
		color: "white",
		textAlign: "center",
		paddingVertical: 10,
		marginTop: 20,
		marginBottom: 20,
	},
});

export default EnterExpense;
