import { ScrollView, Text, View, Pressable, Linking } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const MOCK_PROFESSIONAL_DETAILS = {
  "1": {
    id: "1",
    name: "João Silva",
    category: "Eletricista",
    neighborhood: "Bairro A, Maputo",
    phone: "+258 82 123 456",
    whatsapp: "+258 82 123 456",
    priceRange: "500-1000 MT",
    rating: 4.5,
    reviews: 12,
    description: "Serviços de instalação e manutenção elétrica residencial e comercial. Experiência de 10 anos no mercado.",
    testimonials: [
      { id: "1", name: "Maria", rating: 5, comment: "Excelente trabalho! Muito profissional." },
      { id: "2", name: "Pedro", rating: 4, comment: "Bom serviço, preço justo." },
      { id: "3", name: "Ana", rating: 5, comment: "Recomendo! Trabalho de qualidade." },
    ],
  },
  "2": {
    id: "2",
    name: "Maria Santos",
    category: "Eletricista",
    neighborhood: "Bairro B, Maputo",
    phone: "+258 82 234 567",
    whatsapp: "+258 82 234 567",
    priceRange: "600-1200 MT",
    rating: 4.8,
    reviews: 18,
    description: "Especialista em instalações elétricas modernas e seguras. Certificada e com garantia de serviço.",
    testimonials: [
      { id: "1", name: "João", rating: 5, comment: "Profissional muito competente!" },
      { id: "2", name: "Carlos", rating: 5, comment: "Trabalho impecável e rápido." },
    ],
  },
};

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < Math.floor(rating) ? "★" : "☆");
  }
  return <Text className="text-foreground text-lg">{stars.join("")}</Text>;
};

export default function ProfessionalDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const professional = MOCK_PROFESSIONAL_DETAILS[id as keyof typeof MOCK_PROFESSIONAL_DETAILS];

  if (!professional) {
    return (
      <ScreenContainer className="p-4 items-center justify-center">
        <Text className="text-muted">Profissional não encontrado</Text>
      </ScreenContainer>
    );
  }

  const handleCall = () => {
    Linking.openURL(`tel:${professional.phone}`);
  };

  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${professional.whatsapp.replace(/\D/g, "")}`);
  };

  const handleViewReviews = () => {
    router.push({
      pathname: "/reviews" as any,
      params: { id: professional.id },
    });
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView>
        {/* Header with Back Button */}
        <View className="px-4 py-4 border-b border-border">
          <Pressable onPress={() => router.back()} className="mb-2">
            <Text className="text-foreground text-lg">← Voltar</Text>
          </Pressable>
        </View>

        <View className="px-4 py-6 gap-6">
          {/* Photo Placeholder */}
          <View className="w-full h-48 bg-border rounded-lg items-center justify-center">
            <Text className="text-6xl">👤</Text>
          </View>

          {/* Professional Info */}
          <View className="gap-2">
            <Text className="text-2xl font-bold text-foreground">{professional.name}</Text>
            <Text className="text-base text-muted">{professional.category}</Text>
            <Text className="text-sm text-muted">{professional.neighborhood}</Text>
          </View>

          {/* Rating and Price */}
          <View className="flex-row justify-between items-center">
            <View className="gap-1">
              <View className="flex-row items-center gap-2">
                <StarRating rating={professional.rating} />
                <Text className="text-sm text-muted">({professional.reviews} avaliações)</Text>
              </View>
            </View>
            <View className="gap-1 items-end">
              <Text className="text-sm font-semibold text-foreground">Preço Médio</Text>
              <Text className="text-base font-bold text-foreground">{professional.priceRange}</Text>
            </View>
          </View>

          {/* Description */}
          <View className="gap-2">
            <Text className="text-base font-semibold text-foreground">Sobre o Serviço</Text>
            <Text className="text-sm text-muted leading-relaxed">{professional.description}</Text>
          </View>

          {/* Contact Buttons */}
          <View className="flex-row gap-3">
            <Pressable
              onPress={handleCall}
              style={({ pressed }) => [
                {
                  flex: 1,
                  paddingVertical: 16,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#999999",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-center font-bold text-white text-base">📞 LIGAR</Text>
            </Pressable>
            <Pressable
              onPress={handleWhatsApp}
              style={({ pressed }) => [
                {
                  flex: 1,
                  paddingVertical: 16,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#999999",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-center font-bold text-white text-base">💬 WHATSAPP</Text>
            </Pressable>
          </View>

          {/* Reviews Section */}
          <View className="gap-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold text-foreground">Avaliações</Text>
              <Pressable onPress={handleViewReviews}>
                <Text className="text-sm text-muted">Ver todas →</Text>
              </Pressable>
            </View>

            {professional.testimonials.map((testimonial) => (
              <View
                key={testimonial.id}
                className="p-3 border border-border rounded-lg gap-2"
              >
                <View className="flex-row justify-between items-start">
                  <Text className="font-semibold text-foreground">{testimonial.name}</Text>
                  <View className="flex-row gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Text key={i} className="text-sm">
                        {i < testimonial.rating ? "★" : "☆"}
                      </Text>
                    ))}
                  </View>
                </View>
                <Text className="text-sm text-muted">{testimonial.comment}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
