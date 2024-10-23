import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

export default function Payments() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      nome: "Earl Plose",
    },
    {
      id: 2,
      nome: "Nolan Jancey",
    },
    {
      id: 3,
      nome: "Napoleon Abelevitz",
    },
    {
      id: 4,
      nome: "Galen Vicker",
    },
    {
      id: 5,
      nome: "Judah Klassmann",
    },
    {
      id: 6,
      nome: "Lewie Folshom",
    },
    {
      id: 7,
      nome: "Nedda Swenson",
    },
    {
      id: 8,
      nome: "Tab Baynham",
    },
    {
      id: 9,
      nome: "Bonny Weare",
    },
    {
      id: 10,
      nome: "Erwin Mithun",
    },
    {
      id: 11,
      nome: "Flinn Ranyell",
    },
    {
      id: 12,
      nome: "Cassie Colegate",
    },
    {
      id: 13,
      nome: "Ronna Dummer",
    },
    {
      id: 14,
      nome: "Moises MacConchie",
    },
    {
      id: 15,
      nome: "Bastien Carville",
    },
    {
      id: 16,
      nome: "Krysta Diack",
    },
    {
      id: 17,
      nome: "Shanie Hrus",
    },
    {
      id: 18,
      nome: "Catarina Dobbing",
    },
    {
      id: 19,
      nome: "Malvin Sweetzer",
    },
    {
      id: 20,
      nome: "Clarinda Wilton",
    },
    {
      id: 21,
      nome: "Alford Dutteridge",
    },
    {
      id: 22,
      nome: "Mylo Press",
    },
    {
      id: 23,
      nome: "Zara Noel",
    },
    {
      id: 24,
      nome: "Horton Dury",
    },
    {
      id: 25,
      nome: "Ina Blazej",
    },
    {
      id: 26,
      nome: "Josey Frushard",
    },
    {
      id: 27,
      nome: "Jandy Dearnley",
    },
    {
      id: 28,
      nome: "Bar Edmeads",
    },
    {
      id: 29,
      nome: "Tod Barbe",
    },
    {
      id: 30,
      nome: "Antoni Mullender",
    },
    {
      id: 31,
      nome: "Charity Paddingdon",
    },
    {
      id: 32,
      nome: "Rosalinda Brimfield",
    },
    {
      id: 33,
      nome: "Terza Montgomery",
    },
    {
      id: 34,
      nome: "Joete Usmar",
    },
    {
      id: 35,
      nome: "Chiquita Mattosoff",
    },
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);

  const handleCalendar = (event, selectedDate) => {
    setData(selectedDate);
    setViewCalendar(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.inputView}>
        <View style={styles.inputView}>
          <Ionicons name="wallet" size={24} color="black" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={setValor}
          />
        </View>
        <TextInput
          placeholder="Valor"
          keyboardType="decimal-pad"
          style={styles.inputValor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          selectedValue={id}
          onValueChange={(itemValue, index) => {
            setId(itemValue);
          }}
          style={{ width: "100%" }}
        >
          {sugestoes?.map((item) => {
            return (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            );
          })}
        </Picker>
      </View>
      <View style={styles.inputView}>
        <Text onPress={() => setViewCalendar(true)}>
          {data.toLocaleDateString().split("T")[0]}
        </Text>
        {viewCalendar && (
          <DateTimePicker value={data} onChange={handleCalendar} mode="date" />
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Observações" multiline />
      </View>
      <View style={styles.contentButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  inputView: {
    borderColor: "#343a40",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contentButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  inputValor: {
    textAlign: "right",
    padding: 10,
    flex: 1,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#343a40",
  },
  button: {
    backgroundColor: "#780000",
    padding: 10,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
