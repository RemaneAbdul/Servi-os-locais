import { ScrollView, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";

const CATEGORIES = [
  { id: "1", name: "Eletricista", icon: "⚡" },
  { id: "2", name: "Pedreiro", icon: "🧱" },
  { id: "3", name: "Canalizador", icon: "🔧" },
  { id: "4", name: "Pintor", icon: "🎨" },
  { id: "5", name: "Mecânico", icon: "🔩" },
  { id: "6", name: "Técnico de Frio", icon: "❄️" },
  { id: "7", name: "Outros", icon: "⋯" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const filteredCategories = CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCategoryPress = (categoryName: string) => {
    router.push({
      pathname: "/professionals" as any,
      params: { category: categoryName },
    });
  };

  const renderCategoryCard = ({ item }: { item: (typeof CATEGORIES)[0] }) => (
    <Pressable
      onPress={() => handleCategoryPress(item.name)}
      style={({ pressed }) => [
        {
          flex: 1,
          marginHorizontal: 6,
          marginVertical: 6,
          paddingVertical: 20,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#CCCCCC",
          backgroundColor: pressed ? "#f5f5f5" : "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Text style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</Text>
      <Text className="text-center font-semibold text-foreground text-sm">{item.name}</Text>
    </Pressable>
  );

  return (
    <ScreenContainer className="p-4">
      {/* Search Bar */}
      <View className="mb-6">
        <TextInput
          placeholder="🔍 Pesquisar categoria..."
          placeholderTextColor="#999999"
          value={searchText}
          onChangeText={setSearchText}
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

      {/* Categories Grid */}
      <FlatList
        data={filteredCategories}
        renderItem={renderCategoryCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {filteredCategories.length === 0 && (
        <View className="items-center justify-center py-12">
          <Text className="text-muted text-base">Nenhuma categoria encontrada</Text>
        </View>
      )}
    </ScreenContainer>
  );
}
