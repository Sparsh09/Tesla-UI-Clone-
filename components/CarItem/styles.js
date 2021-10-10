import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
  },
  carContainer: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
export default styles;
