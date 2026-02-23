import { ScrollView, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const MOCK_REVIEWS = {
  "1": [
    { id: "1", name: "Maria", rating: 5, comment: "Excelente trabalho! Muito profissional.", date: "2 dias atrás" },
    { id: "2", name: "Pedro", rating: 4, comment: "Bom serviço, preço justo.", date: "1 semana atrás" },
    { id: "3", name: "Ana", rating: 5, comment: "Recomendo! Trabalho de qualidade.", date: "2 semanas atrás" },
    { id: "4", name: "Carlos", rating: 3, comment: "Serviço ok, mas demorou um pouco.", date: "1 mês atrás" },
  ],
  "2": [
    { id: "1", name: "João", rating: 5, comment: "Profissional muito competente!", date: "3 dias atrás" },
    { id: "2", name: "Carlos", rating: 5, comment: "Trabalho impecável e rápido.", date: "1 semana atrás" },
  ],
};

const PROFESSIONAL_NAMES = {
  "1": "João Silva",
  "2": "Maria Santos",
};

export default function ReviewsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  const reviews = MOCK_REVIEWS[id as keyof typeof MOCK_REVIEWS] || [];
  const professionalName = PROFESSIONAL_NAMES[id as keyof typeof PROFESSIONAL_NAMES] || "Profissional";
  const averageRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : 0;

  const handleSubmitReview = () => {
    if (newRating === 0 || !newComment.trim()) {
      alert("Por favor, adicione uma avaliação e um comentário");
      return;
    }
    alert("Avaliação enviada com sucesso!");
    setNewRating(0);
    setNewComment("");
  };

  const renderReview = ({ item }: { item: (typeof reviews)[0] }) => (
    <View className="p-4 border border-border rounded-lg gap-2 mb-3">
      <View className="flex-row justify-between items-start">
        <Text className="font-semibold text-foreground">{item.name}</Text>
        <View className="flex-row gap-1">
          {[...Array(5)].map((_, i) => (
            <Text key={i} className="text-sm">
              {i < item.rating ? "★" : "☆"}
            </Text>
          ))}
        </View>
      </View>
      <Text className="text-sm text-muted">{item.comment}</Text>
      <Text className="text-xs text-muted">{item.date}</Text>
    </View>
  );

  return (
    <ScreenContainer className="p-0">
      <ScrollView>
        {/* Header */}
        <View className="px-4 py-4 border-b border-border">
          <Pressable onPress={() => router.back()} className="mb-2">
            <Text className="text-foreground text-lg">← Voltar</Text>
          </Pressable>
          <Text className="text-xl font-bold text-foreground">Avaliações</Text>
          <Text className="text-sm text-muted">{professionalName}</Text>
        </View>

        <View className="px-4 py-6 gap-6">
          {/* Average Rating */}
          <View className="gap-2">
            <Text className="text-base font-semibold text-foreground">Avaliação Média</Text>
            <View className="flex-row items-center gap-3">
              <View className="flex-row gap-1">
                {[...Array(5)].map((_, i) => (
                  <Text key={i} className="text-2xl">
                    {i < Math.floor(parseFloat(String(averageRating))) ? "★" : "☆"}
                  </Text>
                ))}
              </View>
              <Text className="text-lg font-bold text-foreground">{averageRating}/5</Text>
              <Text className="text-sm text-muted">({reviews.length} avaliações)</Text>
            </View>
          </View>

          {/* Add Review Section */}
          <View className="gap-3 p-4 bg-surface rounded-lg border border-border">
            <Text className="text-base font-semibold text-foreground">Adicionar Avaliação</Text>

            {/* Star Rating Selector */}
            <View className="gap-2">
              <Text className="text-sm text-muted">Sua avaliação:</Text>
              <View className="flex-row gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Pressable
                    key={star}
                    onPress={() => setNewRating(star)}
                    style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
                  >
                    <Text className="text-3xl">{star <= newRating ? "★" : "☆"}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Comment Input */}
            <View className="gap-2">
              <TextInput
                placeholder="Seu comentário..."
                placeholderTextColor="#999999"
                value={newComment}
                onChangeText={setNewComment}
                multiline
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: "#CCCCCC",
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  fontSize: 14,
                  color: "#000000",
                  textAlignVertical: "top",
                }}
              />
            </View>

            {/* Submit Button */}
            <Pressable
              onPress={handleSubmitReview}
              style={({ pressed }) => [
                {
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#999999",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-center font-bold text-white text-base">ENVIAR</Text>
            </Pressable>
          </View>

          {/* Reviews List */}
          <View className="gap-2">
            <Text className="text-base font-semibold text-foreground">Comentários</Text>
            <FlatList
              data={reviews}
              renderItem={renderReview}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
