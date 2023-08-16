import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

export function Participant(data: { name: string; onRemove: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>

      <TouchableOpacity style={styles.button} onPress={data.onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
