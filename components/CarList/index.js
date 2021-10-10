import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem/index";

const CarsList = (props) => {
  // console.log("S");
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        key={cars.id}
        renderItem={({ item }) => (
          <CarItem
            car={item}
            snaptoAlignment={'start'}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator = {false}
            snapToInterval={Dimensions.get("window").height}
            
          />
        )}
      />
    </View>
  );
};
export default CarsList;
