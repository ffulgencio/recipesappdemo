import React, { useEffect, useState } from "react";
import { getCategories } from "../services/recipes.services";
import { View, Text, Image, StyleSheet, FlatList} from "react-native";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories([...data.categories]));
  }, []);

  return (
    <View style={{}}>
      <FlatList
        style={{ margin: 10 }}
        data={categories}
        numColumns={2}
        renderItem={({ item }, i) => (
          <View style={styles.container}>
            <Image
              resizeMode="cover"
              style={styles.thumb}
              source={{ uri: item.strCategoryThumb }}
            />
            <Text style={styles.title}>{item.strCategory}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation:2
  },
  thumb: {
    width: "100%",
    height: 100,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
