import { ScrollView, Text, View, Pressable, TextInput, Alert } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

const CATEGORIES = [
  "Eletricista",
  "Pedreiro",
  "Canalizador",
  "Pintor",
  "Mecânico",
  "Técnico de Frio",
  "Outros",
];

export default function ProfileScreen() {
  const [name, setName] = useState("João Silva");
  const [phone, setPhone] = useState("+258 82 123 456");
  const [category, setCategory] = useState("Eletricista");
  const [priceRange, setPriceRange] = useState("500-1000 MT");
  const [neighborhood, setNeighborhood] = useState("Bairro A");
  const [description, setDescription] = useState("Serviços de instalação e manutenção elétrica residencial e comercial.");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleSaveProfile = () => {
    if (!name || !phone || !category || !priceRange || !neighborhood || !description) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView>
        {/* Header */}
        <View className="px-4 py-4 border-b border-border">
          <Text className="text-xl font-bold text-foreground">Meu Perfil</Text>
          <Text className="text-sm text-muted">Profissional</Text>
        </View>

        <View className="px-4 py-6 gap-6">
          {/* Photo Upload */}
          <View className="gap-3">
            <View className="w-full h-32 bg-border rounded-lg items-center justify-center">
              <Text className="text-5xl mb-2">📷</Text>
              <Text className="text-sm text-muted">Foto do Perfil</Text>
            </View>
            <Pressable
              onPress={() => Alert.alert("Mudar Foto", "Funcionalidade de upload de foto")}
              style={({ pressed }) => [
                {
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: "#999999",
                  backgroundColor: pressed ? "#DDDDDD" : "#ffffff",
                },
              ]}
            >
              <Text className="text-center font-semibold text-foreground text-sm">Mudar Foto</Text>
            </Pressable>
          </View>

          {/* Name */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Nome</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Seu nome"
              placeholderTextColor="#999999"
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 14,
                color: "#000000",
              }}
            />
          </View>

          {/* Phone */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Telefone</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+258 82 123 456"
              placeholderTextColor="#999999"
              keyboardType="phone-pad"
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 14,
                color: "#000000",
              }}
            />
          </View>

          {/* Category Dropdown */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Categoria</Text>
            <Pressable
              onPress={() => setShowCategoryDropdown(!showCategoryDropdown)}
              style={({ pressed }) => [
                {
                  borderWidth: 1,
                  borderColor: "#CCCCCC",
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
                },
              ]}
            >
              <View className="flex-row justify-between items-center">
                <Text className="text-base text-foreground">{category}</Text>
                <Text className="text-lg text-muted">▼</Text>
              </View>
            </Pressable>

            {showCategoryDropdown && (
              <View className="border border-border rounded-lg overflow-hidden">
                {CATEGORIES.map((cat) => (
                  <Pressable
                    key={cat}
                    onPress={() => {
                      setCategory(cat);
                      setShowCategoryDropdown(false);
                    }}
                    style={({ pressed }) => [
                      {
                        paddingVertical: 12,
                        paddingHorizontal: 12,
                        backgroundColor: cat === category ? "#f5f5f5" : pressed ? "#ffffff" : "#ffffff",
                        borderBottomWidth: 1,
                        borderBottomColor: "#CCCCCC",
                      },
                    ]}
                  >
                    <Text className={cat === category ? "font-semibold text-foreground" : "text-foreground"}>
                      {cat}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* Price Range */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Preço Médio</Text>
            <TextInput
              value={priceRange}
              onChangeText={setPriceRange}
              placeholder="500-1000 MT"
              placeholderTextColor="#999999"
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 14,
                color: "#000000",
              }}
            />
          </View>

          {/* Neighborhood */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Bairro</Text>
            <TextInput
              value={neighborhood}
              onChangeText={setNeighborhood}
              placeholder="Bairro A"
              placeholderTextColor="#999999"
              style={{
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 14,
                color: "#000000",
              }}
            />
          </View>

          {/* Description */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Descrição do Serviço</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Descreva seus serviços..."
              placeholderTextColor="#999999"
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

          {/* Save Button */}
          <Pressable
            onPress={handleSaveProfile}
            style={({ pressed }) => [
              {
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
                backgroundColor: "#999999",
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text className="text-center font-bold text-white text-base">GUARDAR</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
