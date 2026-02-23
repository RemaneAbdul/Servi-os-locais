import { ScrollView, Text, View, Pressable, FlatList } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const MOCK_PROFESSIONALS = [
  {
    id: "1",
    name: "João Silva",
    category: "Eletricista",
    neighborhood: "Bairro A",
    rating: 4.5,
    reviews: 12,
  },
  {
    id: "2",
    name: "Maria Santos",
    category: "Eletricista",
    neighborhood: "Bairro B",
    rating: 4.8,
    reviews: 18,
  },
  {
    id: "3",
    name: "Pedro Neves",
    category: "Eletricista",
    neighborhood: "Bairro C",
    rating: 4.0,
    reviews: 8,
  },
  {
    id: "4",
    name: "Ana Costa",
    category: "Pedreiro",
    neighborhood: "Bairro A",
    rating: 4.6,
    reviews: 14,
  },
  {
    id: "5",
    name: "Carlos Ferreira",
    category: "Canalizador",
    neighborhood: "Bairro D",
    rating: 4.3,
    reviews: 10,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < Math.floor(rating) ? "★" : "☆");
  }
  return <Text className="text-muted text-sm">{stars.join("")}</Text>;
};

export default function ProfessionalsScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams();

  const filteredProfessionals = MOCK_PROFESSIONALS.filter(
    (p) => p.category === category || category === "Todos"
  );

  const handleViewProfile = (professionalId: string) => {
    router.push({
      pathname: "/professional-detail" as any,
      params: { id: professionalId },
    });
  };

  const renderProfessionalCard = ({ item }: { item: (typeof MOCK_PROFESSIONALS)[0] }) => (
    <Pressable
      onPress={() => handleViewProfile(item.id)}
      style={({ pressed }) => [
        {
          marginHorizontal: 12,
          marginVertical: 8,
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#CCCCCC",
          backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <View className="flex-row gap-3">
        {/* Avatar Placeholder */}
        <View className="w-16 h-16 bg-border rounded-lg items-center justify-center">
          <Text className="text-2xl">👤</Text>
        </View>

        {/* Info */}
        <View className="flex-1 justify-center gap-1">
          <Text className="font-semibold text-foreground text-base">{item.name}</Text>
          <Text className="text-muted text-sm">{item.category}</Text>
          <Text className="text-muted text-xs">{item.neighborhood}</Text>
          <View className="flex-row justify-between items-center mt-1">
            <StarRating rating={item.rating} />
            <Text className="text-muted text-xs">({item.reviews})</Text>
          </View>
        </View>
      </View>

      {/* View Profile Button */}
      <Pressable
        onPress={() => handleViewProfile(item.id)}
        style={({ pressed }) => [
          {
            marginTop: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#999999",
            backgroundColor: pressed ? "#DDDDDD" : "#ffffff",
          },
        ]}
      >
        <Text className="text-center font-semibold text-foreground text-sm">Ver Perfil</Text>
      </Pressable>
    </Pressable>
  );

  return (
    <ScreenContainer className="p-0">
      {/* Header */}
      <View className="px-4 py-4 border-b border-border">
        <Pressable onPress={() => router.back()} className="mb-2">
          <Text className="text-foreground text-lg font-semibold">← {category}</Text>
        </Pressable>
      </View>

      {/* List */}
      <FlatList
        data={filteredProfessionals}
        renderItem={renderProfessionalCard}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        contentContainerStyle={{ paddingVertical: 8 }}
      />

      {filteredProfessionals.length === 0 && (
        <View className="flex-1 items-center justify-center">
          <Text className="text-muted text-base">Nenhum profissional encontrado</Text>
        </View>
      )}
    </ScreenContainer>
  );
}
