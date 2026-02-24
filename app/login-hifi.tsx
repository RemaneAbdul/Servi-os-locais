import { Text, View, Pressable, TextInput, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

export default function LoginHiFiScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<"client" | "professional" | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (phone && password) {
      router.replace("/(tabs)");
    }
  };

  return (
    <ScreenContainer className="bg-background" edges={["top", "left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-6 py-8">
          {/* Header com Logo */}
          <View className="items-center mb-8 mt-4">
            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4">
              <Text className="text-4xl font-bold text-white">SL</Text>
            </View>
            <Text className="text-3xl font-bold text-foreground">Serviços Locais</Text>
            <Text className="text-base text-muted mt-2">Conecte com profissionais perto de você</Text>
          </View>

          {/* Seleção de Tipo de Utilizador */}
          {!userType ? (
            <View className="gap-4 mb-8">
              <Text className="text-lg font-semibold text-foreground">Você é:</Text>
              <Pressable
                onPress={() => setUserType("client")}
                style={({ pressed }) => [
                  {
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    backgroundColor: pressed ? "#E3F2FD" : "#FFFFFF",
                    borderWidth: 2,
                    borderColor: "#1976D2",
                  },
                ]}
              >
                <Text className="text-center font-semibold text-primary text-base">👤 Cliente</Text>
                <Text className="text-center text-muted text-sm mt-1">Procuro profissionais</Text>
              </Pressable>

              <Pressable
                onPress={() => setUserType("professional")}
                style={({ pressed }) => [
                  {
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    backgroundColor: pressed ? "#E0F2F1" : "#FFFFFF",
                    borderWidth: 2,
                    borderColor: "#0097A7",
                  },
                ]}
              >
                <Text className="text-center font-semibold text-secondary text-base">🔧 Profissional</Text>
                <Text className="text-center text-muted text-sm mt-1">Ofereço serviços</Text>
              </Pressable>
            </View>
          ) : (
            <View className="gap-6 mb-8">
              {/* Botão Voltar */}
              <Pressable
                onPress={() => setUserType(null)}
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <Text className="text-primary font-semibold">← Voltar</Text>
              </Pressable>

              {/* Abas Login/Registo */}
              <View className="flex-row gap-2 bg-surface rounded-lg p-1">
                <Pressable
                  onPress={() => setIsLogin(true)}
                  style={({ pressed }) => [
                    {
                      flex: 1,
                      paddingVertical: 12,
                      borderRadius: 8,
                      backgroundColor: isLogin ? "#1976D2" : "transparent",
                      opacity: pressed ? 0.8 : 1,
                    },
                  ]}
                >
                  <Text
                    className={`text-center font-semibold ${isLogin ? "text-white" : "text-foreground"}`}
                  >
                    Entrar
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setIsLogin(false)}
                  style={({ pressed }) => [
                    {
                      flex: 1,
                      paddingVertical: 12,
                      borderRadius: 8,
                      backgroundColor: !isLogin ? "#1976D2" : "transparent",
                      opacity: pressed ? 0.8 : 1,
                    },
                  ]}
                >
                  <Text
                    className={`text-center font-semibold ${!isLogin ? "text-white" : "text-foreground"}`}
                  >
                    Registar
                  </Text>
                </Pressable>
              </View>

              {/* Formulário */}
              <View className="gap-4">
                <View>
                  <Text className="text-sm font-semibold text-foreground mb-2">Telefone</Text>
                  <TextInput
                    placeholder="+258 82 123 456"
                    placeholderTextColor="#BDBDBD"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={{
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "#E0E0E0",
                      fontSize: 16,
                      color: "#212121",
                      backgroundColor: "#FFFFFF",
                    }}
                  />
                </View>

                <View>
                  <Text className="text-sm font-semibold text-foreground mb-2">Senha</Text>
                  <TextInput
                    placeholder="••••••••"
                    placeholderTextColor="#BDBDBD"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={{
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "#E0E0E0",
                      fontSize: 16,
                      color: "#212121",
                      backgroundColor: "#FFFFFF",
                    }}
                  />
                </View>

                {!isLogin && (
                  <View>
                    <Text className="text-sm font-semibold text-foreground mb-2">Confirmar Senha</Text>
                    <TextInput
                      placeholder="••••••••"
                      placeholderTextColor="#BDBDBD"
                      secureTextEntry
                      style={{
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: "#E0E0E0",
                        fontSize: 16,
                        color: "#212121",
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                  </View>
                )}
              </View>

              {/* Botão Principal */}
              <Pressable
                onPress={handleLogin}
                style={({ pressed }) => [
                  {
                    paddingVertical: 14,
                    borderRadius: 8,
                    backgroundColor: pressed ? "#1565C0" : "#1976D2",
                  },
                ]}
              >
                <Text className="text-center font-bold text-white text-base">
                  {isLogin ? "ENTRAR" : "CRIAR CONTA"}
                </Text>
              </Pressable>

              {/* Link Esqueci Senha */}
              {isLogin && (
                <Pressable>
                  <Text className="text-center text-primary font-semibold">Esqueci a senha</Text>
                </Pressable>
              )}
            </View>
          )}

          {/* Rodapé */}
          <View className="mt-auto pt-8 border-t border-border">
            <Text className="text-center text-muted text-xs">
              Ao continuar, você concorda com nossos Termos de Serviço
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
