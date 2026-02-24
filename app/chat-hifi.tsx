import { Text, View, Pressable, ScrollView, FlatList, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

const CHAT_CONVERSATIONS = [
  {
    id: "1",
    name: "João Silva",
    category: "Eletricista",
    lastMessage: "Posso ir amanhã às 10h?",
    timestamp: "10:30",
    unread: 2,
    avatar: "⚡",
  },
  {
    id: "2",
    name: "Maria Santos",
    category: "Encanadora",
    lastMessage: "Obrigado pelo serviço!",
    timestamp: "Ontem",
    unread: 0,
    avatar: "🔧",
  },
  {
    id: "3",
    name: "Pedro Neves",
    category: "Pedreiro",
    lastMessage: "Qual é o seu orçamento?",
    timestamp: "2 dias",
    unread: 0,
    avatar: "🧱",
  },
];

const MESSAGES = [
  {
    id: "1",
    sender: "other",
    text: "Olá! Você faz trabalhos de eletricidade?",
    timestamp: "10:15",
  },
  {
    id: "2",
    sender: "me",
    text: "Sim! Faço instalações e reparos. Qual é o problema?",
    timestamp: "10:16",
  },
  {
    id: "3",
    sender: "other",
    text: "Preciso de uma nova tomada na sala",
    timestamp: "10:17",
  },
  {
    id: "4",
    sender: "me",
    text: "Sem problema! Posso ir amanhã às 10h?",
    timestamp: "10:18",
  },
  {
    id: "5",
    sender: "other",
    text: "Perfeito! Qual é o preço?",
    timestamp: "10:30",
  },
];

export default function ChatHiFiScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"conversations" | "message">("conversations");
  const [messageText, setMessageText] = useState("");

  return (
    <ScreenContainer className="bg-background">
      {activeTab === "conversations" ? (
        <View className="flex-1">
          {/* Header */}
          <View className="bg-primary px-6 py-4">
            <Text className="text-2xl font-bold text-white">Mensagens</Text>
          </View>

          {/* Lista de Conversas */}
          <FlatList
            data={CHAT_CONVERSATIONS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setActiveTab("message")}
                style={({ pressed }) => [
                  {
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#E0E0E0",
                    flexDirection: "row",
                    alignItems: "center",
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                {/* Avatar */}
                <View
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: "#E3F2FD",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 24 }}>{item.avatar}</Text>
                </View>

                {/* Informações */}
                <View style={{ flex: 1 }}>
                  <View className="flex-row items-center justify-between">
                    <Text className="font-bold text-foreground">{item.name}</Text>
                    <Text className="text-xs text-muted">{item.timestamp}</Text>
                  </View>
                  <Text className="text-sm text-muted mt-1">{item.category}</Text>
                  <Text className="text-sm text-muted mt-1">{item.lastMessage}</Text>
                </View>

                {/* Badge de Não Lido */}
                {item.unread > 0 && (
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      backgroundColor: "#1976D2",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 8,
                    }}
                  >
                    <Text className="text-white text-xs font-bold">{item.unread}</Text>
                  </View>
                )}
              </Pressable>
            )}
          />
        </View>
      ) : (
        <View className="flex-1">
          {/* Header */}
          <View className="bg-primary px-4 py-3 flex-row items-center justify-between">
            <Pressable
              onPress={() => setActiveTab("conversations")}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <Text className="text-2xl">←</Text>
            </Pressable>
            <View>
              <Text className="text-white font-bold">João Silva</Text>
              <Text className="text-white text-xs">Eletricista • Online</Text>
            </View>
            <View className="flex-row gap-3">
              <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
                <Text className="text-xl">📞</Text>
              </Pressable>
              <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
                <Text className="text-xl">⋮</Text>
              </Pressable>
            </View>
          </View>

          {/* Mensagens */}
          <FlatList
            data={MESSAGES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  flexDirection: "row",
                  justifyContent: item.sender === "me" ? "flex-end" : "flex-start",
                }}
              >
                <View
                  style={{
                    maxWidth: "75%",
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 12,
                    backgroundColor: item.sender === "me" ? "#1976D2" : "#F5F5F5",
                  }}
                >
                  <Text
                    className={item.sender === "me" ? "text-white" : "text-foreground"}
                    style={{ fontSize: 14 }}
                  >
                    {item.text}
                  </Text>
                  <Text
                    className={item.sender === "me" ? "text-blue-100" : "text-muted"}
                    style={{ fontSize: 12, marginTop: 4 }}
                  >
                    {item.timestamp}
                  </Text>
                </View>
              </View>
            )}
          />

          {/* Input de Mensagem */}
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#E0E0E0",
              paddingHorizontal: 12,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
              <Text className="text-2xl">😊</Text>
            </Pressable>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <TextInput
                placeholder="Digite uma mensagem..."
                placeholderTextColor="#BDBDBD"
                value={messageText}
                onChangeText={setMessageText}
                multiline
                style={{
                  flex: 1,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#E0E0E0",
                  backgroundColor: "#FFFFFF",
                  color: "#212121",
                  fontSize: 14,
                }}
              />
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: messageText ? "#1976D2" : "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-xl">{messageText ? "📤" : "🎤"}</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          backgroundColor: "#FFFFFF",
          paddingBottom: 8,
        }}
      >
        <Pressable
          onPress={() => router.replace("/home-map-hifi")}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">🏠</Text>
          <Text className="text-xs text-muted font-semibold mt-1">Home</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">💬</Text>
          <Text className="text-xs text-primary font-semibold mt-1">Chat</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">📋</Text>
          <Text className="text-xs text-muted font-semibold mt-1">Histórico</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(tabs)/profile")}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">👤</Text>
          <Text className="text-xs text-muted font-semibold mt-1">Perfil</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}
