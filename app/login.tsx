import { ScrollView, Text, View, Pressable, TextInput, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import * as Api from "@/lib/_core/api";
import * as Auth from "@/lib/_core/auth";

export default function LoginScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<"client" | "professional">("client");
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finishAuthentication = async (result: { sessionToken: string; user: Api.AuthApiUser }) => {
    const user: Auth.User = {
      id: result.user.id,
      openId: result.user.openId,
      name: result.user.name,
      email: result.user.email,
      loginMethod: result.user.loginMethod,
      userType: result.user.userType,
      role: result.user.role,
      lastSignedIn: new Date(result.user.lastSignedIn),
    };

    await Auth.setSessionToken(result.sessionToken);
    await Auth.setUserInfo(user);

    // The current project has a common tab shell. Keep the authenticated session
    // and user type available so role-specific screens can redirect safely later.
    router.replace("/(tabs)");
  };

  const handleSubmit = async () => {
    setError("");
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Informe o email e a palavra-passe.");
      return;
    }

    if (!isLogin && !name.trim()) {
      setError("Informe o seu nome.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("As palavras-passe não coincidem.");
      return;
    }

    try {
      setLoading(true);
      const result = isLogin
        ? await Api.loginWithEmail(normalizedEmail, password)
        : await Api.registerWithEmail({
            name: name.trim(),
            email: normalizedEmail,
            password,
            confirmPassword,
            userType,
          });

      await finishAuthentication(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível validar a sessão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} keyboardShouldPersistTaps="handled">
        <View className="gap-6">
          <View className="items-center gap-2 mb-2">
            <View className="w-20 h-20 bg-border rounded-lg items-center justify-center mb-2">
              <Text className="text-4xl font-bold text-foreground">SL</Text>
            </View>
            <Text className="text-2xl font-bold text-foreground">Serviços Locais</Text>
            <Text className="text-sm text-muted">Conecte-se com profissionais locais</Text>
          </View>

          <View className="gap-3">
            <Text className="text-base font-semibold text-foreground">Tipo de Utilizador</Text>
            <View className="flex-row gap-3">
              {(["client", "professional"] as const).map((type) => (
                <Pressable
                  key={type}
                  onPress={() => setUserType(type)}
                  style={{
                    flex: 1,
                    paddingVertical: 16,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: userType === type ? "#000000" : "#CCCCCC",
                    backgroundColor: userType === type ? "#f5f5f5" : "#ffffff",
                  }}
                >
                  <Text className="text-center font-semibold text-foreground">
                    {type === "client" ? "Cliente" : "Profissional"}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {!isLogin && (
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Nome</Text>
              <TextInput value={name} onChangeText={setName} placeholder="Seu nome" autoCapitalize="words" style={inputStyle} />
            </View>
          )}

          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="seuemail@exemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={inputStyle}
            />
          </View>

          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Palavra-passe</Text>
            <TextInput value={password} onChangeText={setPassword} placeholder="••••••••" secureTextEntry style={inputStyle} />
          </View>

          {!isLogin && (
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Confirmar palavra-passe</Text>
              <TextInput value={confirmPassword} onChangeText={setConfirmPassword} placeholder="••••••••" secureTextEntry style={inputStyle} />
            </View>
          )}

          {error ? (
            <View className="rounded-lg p-3" style={{ backgroundColor: "#FDECEC" }}>
              <Text style={{ color: "#B42318", textAlign: "center" }}>{error}</Text>
            </View>
          ) : null}

          <Pressable
            onPress={handleSubmit}
            disabled={loading}
            style={({ pressed }) => ({
              paddingVertical: 16,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: "#1976D2",
              opacity: loading ? 0.6 : pressed ? 0.8 : 1,
            })}
          >
            {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text className="text-center font-bold text-white text-base">{isLogin ? "ENTRAR" : "CRIAR CONTA"}</Text>}
          </Pressable>

          <Pressable
            onPress={() => {
              setError("");
              setIsLogin((value) => !value);
            }}
            disabled={loading}
          >
            <Text className="text-center text-muted text-sm">
              {isLogin ? "Não tem conta? " : "Já tem conta? "}
              <Text className="font-semibold text-foreground">{isLogin ? "Criar conta" : "Entrar"}</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: "#CCCCCC",
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 12,
  fontSize: 16,
  color: "#000000",
  backgroundColor: "#FFFFFF",
};
