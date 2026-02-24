import { Text, View, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const ORDERS = [
  {
    id: "1",
    professional: "João Silva",
    category: "Eletricista",
    service: "Instalação de tomada",
    date: "23 Feb 2026",
    time: "10:00",
    status: "completed",
    price: "500 MT",
    rating: 5,
    avatar: "⚡",
  },
  {
    id: "2",
    professional: "Maria Santos",
    category: "Encanadora",
    service: "Reparo de cano",
    date: "20 Feb 2026",
    time: "14:30",
    status: "completed",
    price: "800 MT",
    rating: 4,
    avatar: "🔧",
  },
  {
    id: "3",
    professional: "Pedro Neves",
    category: "Pedreiro",
    service: "Reparo de parede",
    date: "18 Feb 2026",
    time: "09:00",
    status: "completed",
    price: "1200 MT",
    rating: 5,
    avatar: "🧱",
  },
  {
    id: "4",
    professional: "Ana Costa",
    category: "Pintora",
    service: "Pintura de sala",
    date: "15 Feb 2026",
    time: "08:00",
    status: "pending",
    price: "1500 MT",
    rating: 0,
    avatar: "🎨",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "#4CAF50";
    case "pending":
      return "#FF9800";
    case "cancelled":
      return "#F44336";
    default:
      return "#757575";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "completed":
      return "Concluído";
    case "pending":
      return "Pendente";
    case "cancelled":
      return "Cancelado";
    default:
      return "Desconhecido";
  }
};

export default function HistoryHiFiScreen() {
  const router = useRouter();

  return (
    <ScreenContainer className="bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="bg-primary px-6 py-4 flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text className="text-2xl">←</Text>
          </Pressable>
          <Text className="text-2xl font-bold text-white ml-3">Histórico de Pedidos</Text>
        </View>

        {/* Filtros */}
        <View className="px-4 py-3 flex-row gap-2 bg-surface">
          {["Todos", "Concluído", "Pendente"].map((filter) => (
            <Pressable
              key={filter}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: filter === "Todos" ? "#1976D2" : "#FFFFFF",
                  borderWidth: 1,
                  borderColor: filter === "Todos" ? "#1976D2" : "#E0E0E0",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text
                className={filter === "Todos" ? "text-white text-sm font-semibold" : "text-foreground text-sm"}
              >
                {filter}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Lista de Pedidos */}
        <FlatList
          data={ORDERS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12, gap: 12 }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push("/professional-detail")}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  borderRadius: 12,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderColor: "#E0E0E0",
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              {/* Header do Pedido */}
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-3 flex-1">
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      backgroundColor: "#E3F2FD",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{item.avatar}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text className="font-bold text-foreground">{item.professional}</Text>
                    <Text className="text-xs text-muted">{item.category}</Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 6,
                    backgroundColor: getStatusColor(item.status),
                  }}
                >
                  <Text className="text-white text-xs font-bold">{getStatusLabel(item.status)}</Text>
                </View>
              </View>

              {/* Serviço */}
              <Text className="text-sm text-foreground font-semibold mb-2">{item.service}</Text>

              {/* Data e Hora */}
              <View className="flex-row items-center justify-between mb-3 pb-3 border-b border-border">
                <Text className="text-xs text-muted">
                  📅 {item.date} • 🕐 {item.time}
                </Text>
                <Text className="text-sm font-bold text-primary">{item.price}</Text>
              </View>

              {/* Rating ou Botão de Avaliação */}
              {item.status === "completed" ? (
                item.rating > 0 ? (
                  <View className="flex-row items-center gap-1">
                    <Text className="text-warning">★ {item.rating}</Text>
                    <Text className="text-xs text-muted">Avaliado</Text>
                  </View>
                ) : (
                  <Pressable
                    style={({ pressed }) => [
                      {
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        borderRadius: 6,
                        backgroundColor: "#F5F5F5",
                        opacity: pressed ? 0.8 : 1,
                      },
                    ]}
                  >
                    <Text className="text-primary text-xs font-semibold">⭐ Avaliar Serviço</Text>
                  </Pressable>
                )
              ) : (
                <View className="flex-row gap-2">
                  <Pressable
                    style={({ pressed }) => [
                      {
                        flex: 1,
                        paddingVertical: 8,
                        borderRadius: 6,
                        backgroundColor: pressed ? "#1565C0" : "#1976D2",
                      },
                    ]}
                  >
                    <Text className="text-center text-white text-xs font-bold">Contactar</Text>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        flex: 1,
                        paddingVertical: 8,
                        borderRadius: 6,
                        backgroundColor: "#F5F5F5",
                        opacity: pressed ? 0.8 : 1,
                      },
                    ]}
                  >
                    <Text className="text-center text-foreground text-xs font-bold">Cancelar</Text>
                  </Pressable>
                </View>
              )}
            </Pressable>
          )}
        />
      </View>

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
          onPress={() => router.push("/chat-hifi")}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">💬</Text>
          <Text className="text-xs text-muted font-semibold mt-1">Chat</Text>
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
          <Text className="text-xs text-primary font-semibold mt-1">Histórico</Text>
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
