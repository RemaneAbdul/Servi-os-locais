import { Text, View, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

export default function LogoutScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", onPress: () => {} },
      {
        text: "Sair",
        onPress: () => {
          // Navigate to login
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <ScreenContainer className="p-6 items-center justify-center">
      <View className="gap-6 w-full max-w-sm">
        <View className="items-center gap-4">
          <View className="w-20 h-20 bg-border rounded-lg items-center justify-center">
            <Text className="text-4xl">👤</Text>
          </View>
          <Text className="text-2xl font-bold text-foreground">Conta</Text>
        </View>

        <View className="gap-3">
          <Pressable
            onPress={() => Alert.alert("Configurações", "Funcionalidade de configurações")}
            style={({ pressed }) => [
              {
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
              },
            ]}
          >
            <Text className="text-center font-semibold text-foreground">⚙️ Configurações</Text>
          </Pressable>

          <Pressable
            onPress={() => Alert.alert("Ajuda", "Funcionalidade de ajuda")}
            style={({ pressed }) => [
              {
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
              },
            ]}
          >
            <Text className="text-center font-semibold text-foreground">❓ Ajuda</Text>
          </Pressable>

          <Pressable
            onPress={() => Alert.alert("Sobre", "Versão 1.0.0\n\nServiços Locais - Conectando você com profissionais locais")}
            style={({ pressed }) => [
              {
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
              },
            ]}
          >
            <Text className="text-center font-semibold text-foreground">ℹ️ Sobre</Text>
          </Pressable>

          <Pressable
            onPress={handleLogout}
            style={({ pressed }) => [
              {
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
                backgroundColor: "#999999",
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text className="text-center font-bold text-white text-base">SAIR</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
