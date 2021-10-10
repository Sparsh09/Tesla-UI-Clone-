import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles.js";
import StyledButton from "../Buttons/index.js";

const CarItem = (props) => {
  
  const { name, tagLine, image, tagLineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine}
          <Text style={styles.subTitleCTA}>{tagLineCTA} </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("custom order");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
