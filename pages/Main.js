import React, {useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, FlatList , TextInput, TouchableOpacity} from 'react-native';


import Maincard  from "../components/Maincard";

const city_data = [
  {
    id: 0,
    name: 'Allen',
  },
  {
    id: 1,
    name: 'Allendale',
  },
  {
    id: 2,
    name: 'Allentown',
  },
  {
    id: 3,
    name: 'Allison Park',
  },
  {
    id: 4,
    name: 'Allston',
  },
  {
    id: 5,
    name: 'Alma',
  },
  {
    id: 6,
    name: 'Almonte',
  },
  {
    id: 7,
    name: 'Alpharetta',
  },
  {
    id: 8,
    name: 'Alpine',
  },
  {
    id: 9,
    name: 'Alsip',
  },
  {
    id: 10,
    name: 'Altamonte Springs',
  },
  {
    id: 11,
    name: 'Altanta',
  },
  {
    id: 12,
    name: 'Altemonte Springs',
  },
  {
    id: 13,
    name: 'Alton',
  },
  {
    id: 14,
    name: 'Alvaro Obregon',
  },
  {
    id: 15,
    name: 'Ambler',
  },
];
  

const Main = (props) => {
        const [searchValue, setSearchValue] = useState("");
        const [displayList, setDisplayList] = useState([]);

        
        const renderCities= ({ item }) => {
          return (
            <TouchableOpacity
              onPress = {()=>  props.navigation.navigate("RestaurantsPage", {item})}
              >
                  <Text style={styles.cities}>{item.name}</Text>
              </TouchableOpacity>
          )
        }
      
        // <Maincard main={item} onmyselected =  {()=>  props.navigation.navigate("RestaurantsPage", {item})}/>

        useEffect(() => {
            setDisplayList(city_data)
          }, [])

          // cityName.indexOf(text) > -1
          useEffect(() => {
            const filteredValue = city_data.filter(item => {
              const text = searchValue.toUpperCase();
              const cityName = item.name.toUpperCase();
              return cityName.startsWith(text);
            }); setDisplayList(filteredValue);
          },[searchValue])


    
    return (
        <SafeAreaView style= {{flex:1, backgroundColor:"#E1E9F6"}}>
          <View style={styles.container}>
            <Text style={styles.header}>Select a city</Text>
            <TextInput
              style={styles.input}
              value={searchValue}
              placeholder="Enter a city"
              onChangeText={(searchText) => setSearchValue(searchText)}
            />
            <FlatList 
            data={displayList} 
            renderItem={renderCities}
            keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </SafeAreaView>
      );
    };


    const styles = StyleSheet.create({

      container:{
        flex:1,
      },
      header:{
        alignSelf:"center",
        margin:5,
        fontWeight:"bold",
        fontSize:20,
      },
      input:{
        fontSize:15,
        borderWidth:1,
        borderColor:"black",
        padding:10,
        borderRadius:10,
        margin:5,
      },
      cities:{
        padding:10,
        // margin:5,
        fontSize: 15,
        alignSelf:"center",
        color:"#CFA64A",
        fontWeight:"bold",

      }
    })
export { Main }