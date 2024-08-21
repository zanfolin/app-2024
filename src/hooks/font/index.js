import { createContext, useContext } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";

const FontContext = createContext({});

export function FontProvider({ children }) {
  const [loaded, error] = useFonts({
    regular: require("../../assets/fonts/Oswald-Regular.ttf"),
  });

  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 28, marginTop: 15 }}>
          Carregando as Fontes
        </Text>
        <ActivityIndicator size="large" color="#0000" />
      </View>
    );
  }

  return (
    <FontContext.Provider value={{ loaded }}>{children}</FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
