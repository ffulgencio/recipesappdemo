import React, {useEffect, useState} from 'react';
import { getCategories } from '../services/recipes.services';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
       getCategories().then(data => setCategories([...data.categories]));
    },[])

    return ( 
        <ScrollView>
            {categories.map(category =>(<View key={category.idCategory}>
                <Image style={styles.thumb} source={{uri:category.strCategoryThumb }} />
               
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>))}
        </ScrollView>
     );
}

export default Home;

const styles = StyleSheet.create(
    {
        thumb:{
            width:'100%',
            height:75
            ,borderRadius:15,
            marginVertical:5,
            marginHorizontal:5
        },
        title:{
            fontSize:18,
            fontWeight:"bold"
        }
    }
)