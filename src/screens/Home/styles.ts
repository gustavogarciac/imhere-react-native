import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#848484",
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    marginVertical: 24,
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    fontSize: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 4,
  },
  listTitle: {
    color: "#848484",
    fontSize: 16,
    marginBottom: 16,
  },
  listEmptyText: {
    color: "#848484",
    fontSize: 14,
    textAlign: "center",
    marginTop: 48,
  },
});
