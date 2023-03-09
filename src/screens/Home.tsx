import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion1 } from "../redux/features/questions/questionSlice";
import { persistor } from "../redux/store";
import { addUserCar } from "../redux/features/user/userCarSlice";

const Home = () => {
  //show question1 from redux
  const dispatch = useDispatch();
  const question1 = useSelector((state: any) => state.questions);
  console.log("question1:", question1);

  const userCar = useSelector((state: any) => state.favourite);
  console.log("userCar:", userCar);

  //handle answer1 updateQuestion1
  const handleAnswer1 = (answer: string) => {
    dispatch(updateQuestion1(answer));
  };

  const handleAddCar = () => {
    dispatch(
      addUserCar({
        id: 1,
        name: "Honda",
      })
    );
  };

  const handlePurgeState = (state: any) => {
    persistor.purge();
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>1.What is the your name: {question1.question1}</Text>
      <Text>2.What is your favorite Car: {userCar.name}</Text>
      <Button title="Answer 1" onPress={() => handleAnswer1("Siso")} />
      <Button title="Answer 2" onPress={() => handleAddCar()} />

      {/* Purge state Purge */}
      <Button title="Purge State" onPress={handlePurgeState} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
