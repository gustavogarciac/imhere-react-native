import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participants";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");
  const date = new Date();
  const formatedDate = format(date, "dd 'de' LLLL 'de' yyyy 'às' HH':'mm'h'", {
    locale: ptBR,
  });

  function handleAddParticipant() {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participant existente",
        "Este participante já foi adicionado na lista de convidados.",
        [
          {
            text: "Ok",
            onPress: () => {
              setNewParticipant("");
            },
          },
        ]
      );
    }
    setParticipants((prevState) => [newParticipant, ...prevState]);
    setNewParticipant("");
  }
  function handleRemoveParticipant(participantToBeRemoved: string) {
    Alert.alert("Remover", "Você deseja remover este participante?", [
      {
        text: "Sim",
        onPress: () =>
          setParticipants(
            participants.filter(
              (participant) => participant !== participantToBeRemoved
            )
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>{formatedDate}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#424242"
          value={newParticipant}
          onChangeText={(text) => setNewParticipant(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Lista de Participantes</Text>
      <FlatList
        data={participants}
        keyExtractor={(participant) => participant}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
