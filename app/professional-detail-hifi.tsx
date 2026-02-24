import { Text, View, Pressable, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const PROFESSIONAL = {
  id: "1",
  name: "João Silva",
  category: "Eletricista",
  neighborhood: "Bairro A, Maputo",
  distance: 0.8,
  phone: "+258 82 123 456",
  rating: 4.8,
  reviews: 24,
  priceRange: "500-1500 MT",
  description:
    "Eletricista profissional com 10 anos de experiência. Especializado em instalações residenciais e comerciais, manutenção e reparos. Trabalho garantido e atendimento rápido.",
};

const TESTIMONIALS = [
  {
    id: "1",
    name: "Maria Costa",
    rating: 5,
    comment: "Excelente profissional! Trabalho rápido e bem feito.",
    date: "2 dias atrás",
  },
  {
    id: "2",
    name: "Pedro Neves",
    rating: 4.5,
    comment: "Muito bom, recomendo!",
    date: "1 semana atrás",
  },
  {
    id: "3",
    name: "Ana Silva",
    rating: 5,
    comment: "Profissional confiável e atencioso.",
    date: "2 semanas atrás",
  },
];

export default function ProfessionalDetailHiFiScreen() {
  const router = useRouter();

  return (
    <ScreenContainer className="bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header com Voltar */}
        <View className="px-4 pt-4 pb-2 flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text className="text-2xl">←</Text>
          </Pressable>
          <Text className="text-lg font-bold text-foreground ml-3">Perfil do Profissional</Text>
        </View>

        {/* Foto/Avatar Grande */}
        <View className="items-center py-6">
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#E3F2FD",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 56 }}>⚡</Text>
          </View>
        </View>

        {/* Informações Principais */}
        <View className="px-6 mb-6">
          <Text className="text-2xl font-bold text-foreground text-center">{PROFESSIONAL.name}</Text>
          <Text className="text-base text-primary text-center font-semibold mt-2">
            {PROFESSIONAL.category}
          </Text>
          <Text className="text-sm text-muted text-center mt-1">
            📍 {PROFESSIONAL.neighborhood} • {PROFESSIONAL.distance} km
          </Text>

          {/* Rating e Reviews */}
          <View className="flex-row items-center justify-center mt-4 gap-2">
            <Text className="text-warning font-bold">★ {PROFESSIONAL.rating}</Text>
            <Text className="text-muted text-sm">({PROFESSIONAL.reviews} avaliações)</Text>
          </View>

          {/* Preço */}
          <View
            style={{
              marginTop: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: "#E3F2FD",
              borderLeftWidth: 4,
              borderLeftColor: "#1976D2",
            }}
          >
            <Text className="text-xs text-muted">Preço Médio</Text>
            <Text className="text-lg font-bold text-primary">{PROFESSIONAL.priceRange}</Text>
          </View>
        </View>

        {/* Descrição */}
        <View className="px-6 mb-6">
          <Text className="text-sm font-semibold text-foreground mb-2">Sobre o Serviço</Text>
          <Text className="text-sm text-muted leading-relaxed">{PROFESSIONAL.description}</Text>
        </View>

        {/* Botões de Contacto */}
        <View className="px-6 mb-6 gap-3">
          <Pressable
            style={({ pressed }) => [
              {
                paddingVertical: 14,
                borderRadius: 8,
                backgroundColor: pressed ? "#1565C0" : "#1976D2",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              },
            ]}
          >
            <Text className="text-xl">📞</Text>
            <Text className="font-bold text-white text-base">LIGAR</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                paddingVertical: 14,
                borderRadius: 8,
                backgroundColor: pressed ? "#00897B" : "#0097A7",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              },
            ]}
          >
            <Text className="text-xl">💬</Text>
            <Text className="font-bold text-white text-base">WHATSAPP</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                paddingVertical: 14,
                borderRadius: 8,
                backgroundColor: pressed ? "#F5F5F5" : "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E0E0E0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              },
            ]}
          >
            <Text className="text-xl">💬</Text>
            <Text className="font-bold text-primary text-base">ENVIAR MENSAGEM</Text>
          </Pressable>
        </View>

        {/* Avaliações */}
        <View className="px-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-foreground">Avaliações</Text>
            <Pressable
              onPress={() => router.push("/reviews")}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <Text className="text-primary font-semibold">Ver todas →</Text>
            </Pressable>
          </View>

          <FlatList
            data={TESTIMONIALS.slice(0, 2)}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                style={{
                  marginBottom: 12,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  borderRadius: 8,
                  backgroundColor: "#F5F5F5",
                  borderLeftWidth: 4,
                  borderLeftColor: "#FFB300",
                }}
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="font-semibold text-foreground">{item.name}</Text>
                  <Text className="text-warning font-bold">★ {item.rating}</Text>
                </View>
                <Text className="text-sm text-muted mb-1">{item.comment}</Text>
                <Text className="text-xs text-muted">{item.date}</Text>
              </View>
            )}
          />
        </View>

        {/* Espaço para Bottom Navigation */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
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
