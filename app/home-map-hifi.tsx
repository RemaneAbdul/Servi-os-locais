import { Text, View, Pressable, TextInput, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

// Mock data para profissionais próximos
const NEARBY_PROFESSIONALS = [
  {
    id: "1",
    name: "João Silva",
    category: "Eletricista",
    distance: 0.8,
    rating: 4.8,
    reviews: 24,
    image: "⚡",
  },
  {
    id: "2",
    name: "Maria Santos",
    category: "Encanadora",
    distance: 1.2,
    rating: 4.6,
    reviews: 18,
    image: "🔧",
  },
  {
    id: "3",
    name: "Pedro Neves",
    category: "Pedreiro",
    distance: 1.5,
    rating: 4.9,
    reviews: 32,
    image: "🧱",
  },
];

export default function HomeMapHiFiScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Eletricista", "Pedreiro", "Canalizador", "Pintor", "Mecânico"];

  return (
    <ScreenContainer className="bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="bg-primary px-6 pt-4 pb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-white">Serviços Locais</Text>
            <Pressable
              onPress={() => router.push("/(tabs)/profile")}
              style={({ pressed }) => [
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text className="text-xl">👤</Text>
            </Pressable>
          </View>

          {/* Barra de Pesquisa */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              paddingHorizontal: 12,
              height: 44,
            }}
          >
            <Text className="text-xl mr-2">🔍</Text>
            <TextInput
              placeholder="Buscar profissional..."
              placeholderTextColor="#BDBDBD"
              value={searchText}
              onChangeText={setSearchText}
              style={{ flex: 1, fontSize: 14, color: "#212121" }}
            />
          </View>
        </View>

        {/* Mapa Placeholder */}
        <View
          style={{
            height: 250,
            backgroundColor: "#E3F2FD",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E0E0E0",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 48 }}>🗺️</Text>
            <Text style={{ fontSize: 14, color: "#757575", marginTop: 8 }}>
              Mapa com pins de profissionais próximos
            </Text>
            <View
              style={{
                marginTop: 12,
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: "#1976D2",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "600" }}>
                📍 Ativar Localização
              </Text>
            </View>
          </View>
        </View>

        {/* Categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 12, paddingHorizontal: 6 }}
          contentContainerStyle={{ gap: 8 }}
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 20,
                  backgroundColor: selectedCategory === category ? "#1976D2" : "#F5F5F5",
                  borderWidth: 1,
                  borderColor: selectedCategory === category ? "#1976D2" : "#E0E0E0",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text
                className={`font-semibold text-sm ${
                  selectedCategory === category ? "text-white" : "text-foreground"
                }`}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Lista de Profissionais Próximos */}
        <View className="flex-1 px-4 py-4">
          <Text className="text-lg font-bold text-foreground mb-3">Profissionais Próximos</Text>

          <FlatList
            data={NEARBY_PROFESSIONALS}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push("/professional-detail")}
                style={({ pressed }) => [
                  {
                    marginBottom: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderRadius: 12,
                    backgroundColor: "#FFFFFF",
                    borderWidth: 1,
                    borderColor: "#E0E0E0",
                    flexDirection: "row",
                    alignItems: "center",
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                {/* Avatar */}
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#E3F2FD",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 28 }}>{item.image}</Text>
                </View>

                {/* Informações */}
                <View style={{ flex: 1 }}>
                  <Text className="font-bold text-foreground">{item.name}</Text>
                  <Text className="text-sm text-muted">{item.category}</Text>
                  <View className="flex-row items-center mt-1">
                    <Text className="text-xs text-warning">★ {item.rating}</Text>
                    <Text className="text-xs text-muted ml-2">({item.reviews})</Text>
                    <Text className="text-xs text-muted ml-2">📍 {item.distance} km</Text>
                  </View>
                </View>

                {/* Ícone */}
                <Text className="text-xl">→</Text>
              </Pressable>
            )}
          />
        </View>
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
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl">🏠</Text>
          <Text className="text-xs text-primary font-semibold mt-1">Home</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/reviews")}
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
          onPress={() => router.push("/professionals")}
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
