import { Text, View, Pressable, TextInput, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

const REVIEWS = [
  {
    id: "1",
    name: "Maria Costa",
    rating: 5,
    comment: "Excelente profissional! Trabalho rápido e bem feito. Voltaria a contratar com certeza.",
    date: "2 dias atrás",
    avatar: "👩",
  },
  {
    id: "2",
    name: "Pedro Neves",
    rating: 4.5,
    comment: "Muito bom, recomendo! Preço justo e qualidade garantida.",
    date: "1 semana atrás",
    avatar: "👨",
  },
  {
    id: "3",
    name: "Ana Silva",
    rating: 5,
    comment: "Profissional confiável e atencioso. Fez um ótimo trabalho na minha casa.",
    date: "2 semanas atrás",
    avatar: "👩",
  },
  {
    id: "4",
    name: "Carlos Ferreira",
    rating: 4,
    comment: "Bom atendimento, mas demorou um pouco mais do que o previsto.",
    date: "3 semanas atrás",
    avatar: "👨",
  },
];

export default function ReviewsHiFiScreen() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const averageRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <ScreenContainer className="bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-primary px-6 py-4 flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text className="text-2xl text-white">←</Text>
          </Pressable>
          <Text className="text-2xl font-bold text-white ml-3">Avaliações</Text>
        </View>

        {/* Resumo de Avaliações */}
        <View className="px-6 py-6 bg-surface mx-4 my-4 rounded-12">
          <View className="items-center mb-4">
            <Text className="text-5xl font-bold text-primary">{averageRating}</Text>
            <View className="flex-row gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Text key={i} className="text-2xl">
                  {i < Math.floor(parseFloat(averageRating)) ? "★" : "☆"}
                </Text>
              ))}
            </View>
            <Text className="text-sm text-muted mt-2">{REVIEWS.length} avaliações</Text>
          </View>
        </View>

        {/* Botão Adicionar Avaliação */}
        {!showForm && (
          <Pressable
            onPress={() => setShowForm(true)}
            style={({ pressed }) => [
              {
                marginHorizontal: 24,
                marginBottom: 16,
                paddingVertical: 12,
                borderRadius: 8,
                backgroundColor: pressed ? "#1565C0" : "#1976D2",
              },
            ]}
          >
            <Text className="text-center font-bold text-white">⭐ ADICIONAR AVALIAÇÃO</Text>
          </Pressable>
        )}

        {/* Formulário de Avaliação */}
        {showForm && (
          <View className="px-6 mb-6 pb-6 bg-surface mx-4 rounded-12 p-4">
            <Text className="text-lg font-bold text-foreground mb-4">Sua Avaliação</Text>

            {/* Seletor de Estrelas */}
            <View className="flex-row justify-center gap-3 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Pressable
                  key={star}
                  onPress={() => setRating(star)}
                  style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
                >
                  <Text className="text-4xl">{star <= rating ? "★" : "☆"}</Text>
                </Pressable>
              ))}
            </View>

            {/* Campo de Comentário */}
            <TextInput
              placeholder="Compartilhe sua experiência..."
              placeholderTextColor="#BDBDBD"
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                fontSize: 14,
                color: "#212121",
                backgroundColor: "#FFFFFF",
                textAlignVertical: "top",
                marginBottom: 12,
              }}
            />

            {/* Botões */}
            <View className="flex-row gap-3">
              <Pressable
                onPress={() => setShowForm(false)}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 6,
                    backgroundColor: "#F5F5F5",
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <Text className="text-center font-semibold text-foreground">Cancelar</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 6,
                    backgroundColor: pressed ? "#1565C0" : "#1976D2",
                  },
                ]}
              >
                <Text className="text-center font-bold text-white">Enviar</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Lista de Avaliações */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-bold text-foreground mb-4">Comentários</Text>

          <FlatList
            data={REVIEWS}
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
                {/* Header */}
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-2xl">{item.avatar}</Text>
                    <View>
                      <Text className="font-bold text-foreground">{item.name}</Text>
                      <Text className="text-xs text-muted">{item.date}</Text>
                    </View>
                  </View>
                  <View className="flex-row gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Text key={i} className="text-sm">
                        {i < Math.floor(item.rating) ? "★" : "☆"}
                      </Text>
                    ))}
                  </View>
                </View>

                {/* Comentário */}
                <Text className="text-sm text-foreground leading-relaxed">{item.comment}</Text>
              </View>
            )}
          />
        </View>

        {/* Espaço */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </ScreenContainer>
  );
}
