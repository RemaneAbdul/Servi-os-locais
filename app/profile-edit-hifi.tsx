import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useState } from "react";

export default function ProfileEditHiFiScreen() {
  const router = useRouter();
  const [name, setName] = useState("João Silva");
  const [phone, setPhone] = useState("+258 82 123 456");
  const [category, setCategory] = useState("Eletricista");
  const [priceRange, setPriceRange] = useState("500-1500 MT");
  const [neighborhood, setNeighborhood] = useState("Bairro A, Maputo");
  const [description, setDescription] = useState(
    "Eletricista profissional com 10 anos de experiência. Especializado em instalações residenciais e comerciais."
  );

  const categories = ["Eletricista", "Pedreiro", "Canalizador", "Pintor", "Mecânico", "Técnico de Frio"];

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
          <Text className="text-2xl font-bold text-white ml-3">Editar Perfil</Text>
        </View>

        {/* Foto */}
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
          <Pressable
            style={({ pressed }) => [
              {
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 6,
                backgroundColor: pressed ? "#E3F2FD" : "#F5F5F5",
                borderWidth: 1,
                borderColor: "#1976D2",
              },
            ]}
          >
            <Text className="text-primary font-semibold text-sm">📷 Mudar Foto</Text>
          </Pressable>
        </View>

        {/* Formulário */}
        <View className="px-6 pb-8 gap-4">
          {/* Nome */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Nome Completo</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Seu nome"
              placeholderTextColor="#BDBDBD"
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                fontSize: 14,
                color: "#212121",
                backgroundColor: "#FFFFFF",
              }}
            />
          </View>

          {/* Telefone */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Telefone</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+258 82 123 456"
              placeholderTextColor="#BDBDBD"
              keyboardType="phone-pad"
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                fontSize: 14,
                color: "#212121",
                backgroundColor: "#FFFFFF",
              }}
            />
          </View>

          {/* Categoria */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Categoria de Serviço</Text>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                backgroundColor: "#FFFFFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text className="text-foreground font-semibold">{category}</Text>
              <Text className="text-lg">▼</Text>
            </View>
          </View>

          {/* Faixa de Preço */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Faixa de Preço</Text>
            <TextInput
              value={priceRange}
              onChangeText={setPriceRange}
              placeholder="500-1500 MT"
              placeholderTextColor="#BDBDBD"
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                fontSize: 14,
                color: "#212121",
                backgroundColor: "#FFFFFF",
              }}
            />
          </View>

          {/* Bairro */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Bairro/Localização</Text>
            <TextInput
              value={neighborhood}
              onChangeText={setNeighborhood}
              placeholder="Bairro A, Maputo"
              placeholderTextColor="#BDBDBD"
              style={{
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                fontSize: 14,
                color: "#212121",
                backgroundColor: "#FFFFFF",
              }}
            />
          </View>

          {/* Descrição */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Descrição do Serviço</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Descreva seus serviços..."
              placeholderTextColor="#BDBDBD"
              multiline
              numberOfLines={5}
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
              }}
            />
          </View>

          {/* Botões */}
          <View className="gap-3 mt-4">
            <Pressable
              style={({ pressed }) => [
                {
                  paddingVertical: 14,
                  borderRadius: 8,
                  backgroundColor: pressed ? "#1565C0" : "#1976D2",
                },
              ]}
            >
              <Text className="text-center font-bold text-white text-base">💾 GUARDAR PERFIL</Text>
            </Pressable>

            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                {
                  paddingVertical: 14,
                  borderRadius: 8,
                  backgroundColor: "#F5F5F5",
                  borderWidth: 1,
                  borderColor: "#E0E0E0",
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-center font-semibold text-foreground text-base">Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
