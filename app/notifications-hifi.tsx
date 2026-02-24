import { Text, View, Pressable, FlatList, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

const NOTIFICATIONS = [
  {
    id: "1",
    type: "message",
    title: "Nova mensagem de João Silva",
    message: "Posso ir amanhã às 10h?",
    timestamp: "5 minutos atrás",
    read: false,
    icon: "💬",
  },
  {
    id: "2",
    type: "order",
    title: "Pedido concluído",
    message: "Maria Santos concluiu o serviço",
    timestamp: "1 hora atrás",
    read: false,
    icon: "✅",
  },
  {
    id: "3",
    type: "rating",
    title: "Nova avaliação",
    message: "Pedro Neves deixou uma avaliação de 5 estrelas",
    timestamp: "3 horas atrás",
    read: true,
    icon: "⭐",
  },
  {
    id: "4",
    type: "nearby",
    title: "Profissional próximo",
    message: "João Silva está a 0.8 km de você",
    timestamp: "1 dia atrás",
    read: true,
    icon: "📍",
  },
  {
    id: "5",
    type: "promotion",
    title: "Promoção especial",
    message: "Ganhe 10% de desconto em seu próximo serviço",
    timestamp: "2 dias atrás",
    read: true,
    icon: "🎉",
  },
];

export default function NotificationsHiFiScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filteredNotifications =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "message":
        return "#E3F2FD";
      case "order":
        return "#E8F5E9";
      case "rating":
        return "#FFF3E0";
      case "nearby":
        return "#F3E5F5";
      case "promotion":
        return "#FCE4EC";
      default:
        return "#F5F5F5";
    }
  };

  return (
    <ScreenContainer className="bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="bg-primary px-6 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <Text className="text-2xl text-white">←</Text>
            </Pressable>
            <Text className="text-2xl font-bold text-white ml-3">Notificações</Text>
          </View>
          <Pressable
            onPress={() => setNotifications([])}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text className="text-white font-semibold text-sm">Limpar</Text>
          </Pressable>
        </View>

        {/* Filtros */}
        <View className="px-4 py-3 flex-row gap-2 bg-surface">
          {["all", "unread"].map((f) => (
            <Pressable
              key={f}
              onPress={() => setFilter(f as "all" | "unread")}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: filter === f ? "#1976D2" : "#FFFFFF",
                  borderWidth: 1,
                  borderColor: filter === f ? "#1976D2" : "#E0E0E0",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text
                className={filter === f ? "text-white text-sm font-semibold" : "text-foreground text-sm"}
              >
                {f === "all" ? "Todas" : "Não Lidas"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Lista de Notificações */}
        {filteredNotifications.length > 0 ? (
          <FlatList
            data={filteredNotifications}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12, gap: 8 }}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => markAsRead(item.id)}
                style={({ pressed }) => [
                  {
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderRadius: 8,
                    backgroundColor: getNotificationColor(item.type),
                    borderLeftWidth: 4,
                    borderLeftColor: item.read ? "#E0E0E0" : "#1976D2",
                    flexDirection: "row",
                    alignItems: "center",
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                {/* Ícone */}
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "rgba(255,255,255,0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                </View>

                {/* Conteúdo */}
                <View style={{ flex: 1 }}>
                  <View className="flex-row items-center justify-between mb-1">
                    <Text className="font-bold text-foreground">{item.title}</Text>
                    {!item.read && (
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "#1976D2",
                        }}
                      />
                    )}
                  </View>
                  <Text className="text-sm text-muted mb-1">{item.message}</Text>
                  <Text className="text-xs text-muted">{item.timestamp}</Text>
                </View>

                {/* Botão Deletar */}
                <Pressable
                  onPress={() => deleteNotification(item.id)}
                  style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, marginLeft: 8 }]}
                >
                  <Text className="text-lg">✕</Text>
                </Pressable>
              </Pressable>
            )}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-5xl mb-4">🔔</Text>
            <Text className="text-lg font-semibold text-foreground">Sem notificações</Text>
            <Text className="text-sm text-muted mt-2">Você está em dia com tudo!</Text>
          </View>
        )}
      </View>
    </ScreenContainer>
  );
}
