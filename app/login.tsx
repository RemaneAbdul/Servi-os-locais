import { ScrollView, Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

export default function LoginScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<"client" | "professional" | null>(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!userType || !phone || !password) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    // Navigate to home
    router.replace("/(tabs)");
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <View className="gap-8">
          {/* Logo/Title */}
          <View className="items-center gap-2 mb-4">
            <View className="w-20 h-20 bg-border rounded-lg items-center justify-center mb-2">
              <Text className="text-4xl font-bold text-foreground">SL</Text>
            </View>
            <Text className="text-2xl font-bold text-foreground">Serviços Locais</Text>
            <Text className="text-sm text-muted">Conecte-se com profissionais locais</Text>
          </View>

          {/* User Type Selection */}
          <View className="gap-3">
            <Text className="text-base font-semibold text-foreground">Tipo de Utilizador</Text>
            <View className="flex-row gap-3">
              <Pressable
                onPress={() => setUserType("client")}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    paddingVertical: 16,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: userType === "client" ? "#000000" : "#CCCCCC",
                    backgroundColor: userType === "client" ? "#f5f5f5" : "#ffffff",
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text className="text-center font-semibold text-foreground">Cliente</Text>
              </Pressable>
              <Pressable
                onPress={() => setUserType("professional")}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    paddingVertical: 16,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: userType === "professional" ? "#000000" : "#CCCCCC",
                    backgroundColor: userType === "professional" ? "#f5f5f5" : "#ffffff",
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text className="text-center font-semibold text-foreground">Profissional</Text>
              </Pressable>
            </View>
          </View>

          {/* Phone Input */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Telefone</Text>
            <TextInput
              placeholder="+258 82 123 456"
              placeholderTextColor="#999999"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 16,
                color: "#000000",
              }}
            />
          </View>

          {/* Password Input */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Senha</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#999999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 16,
                color: "#000000",
              }}
            />
          </View>

          {/* Login Button */}
          <Pressable
            onPress={handleLogin}
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
            <Text className="text-center font-bold text-white text-base">ENTRAR</Text>
          </Pressable>

          {/* Create Account Link */}
          <Pressable onPress={() => alert("Criar conta")}>
            <Text className="text-center text-muted text-sm">
              Não tem conta? <Text className="font-semibold text-foreground">Criar conta</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
