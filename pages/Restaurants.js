import React , {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const restaurantData= [
    {
      "id": 1,
      "name": "Mission Chinese Food",
      "city": "Altanta",
      "image": "https://www.seriouseats.com/images/20110816-mission-chinese-food-09.jpg",
      "address": "171 E Broadway, Altanta, NY 10002",
      "image2" : "https://imgs.6sqft.com/wp-content/uploads/2018/12/19102933/robertas.jpg",
      "tel": "0 142 155570"
      },
    {
      "id": 2,
      "name": "Emily",
      "city": "Alton",
      "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
      "address": "919 Fulton St, Alton, NY 11238",
      "image2" : "https://imgs.6sqft.com/wp-content/uploads/2018/12/19102933/robertas.jpg",
      "tel": "0 142 155570"
      },
    {
      "id": 3,
      "name": "Kang Ho Dong Baekjeong",
      "city": "Alpine",
      "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
      "address": "1 E 32nd St, Altanta, NY 10016",
      "image2" : "https://imgs.6sqft.com/wp-content/uploads/2018/12/19102933/robertas.jpg",
      "tel": "0 142 155570"
      },
    {
      "id": 4,
      "name": "Katz's Delicatessen",
      "city": "Alpine",
      "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
      "address": "205 E Houston St, Alpine, NY 10002",
      "image2" : "https://imgs.6sqft.com/wp-content/uploads/2018/12/19102933/robertas.jpg",
      "tel": "0 142 155570"
      },

    {
      "id": 5,
      "name": "Roberta's Pizza",
      "city": "Altanta",
      "image": "https://images.squarespace-cdn.com/content/v1/583a2a3fcd0f680eca9f0eff/1494928044961-U2PE5Y5IL451AFIL5XMP/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/robertas-pizza-dough-best-pizza-dough",
      "address": "205 E Houston St, Altanta, NY 10002",
      "image2" : "https://imgs.6sqft.com/wp-content/uploads/2018/12/19102933/robertas.jpg",
      "tel": "0 142 155570"
      }
    
  ]
      


const Restaurants = (props) => {

    const mainData = props.route.params.item
    const [searchValue, setSearchValue] = useState("");

     const [displayList, setDisplayList] = useState([]);

     useEffect(() => {
        setDisplayList(restaurantData)
      }, [])
      
      
        useEffect(() => {
          const filteredValue = restaurantData.filter(item => {
            const text = searchValue.toUpperCase();
            const cityName = item.name.toUpperCase();
            return cityName.indexOf(text) > -1;
          }); setDisplayList(filteredValue);
        },[searchValue])

        // onPress= {() => props.navigation.navigate("Restpage", item)}

        const renderRestaurants = ({item}) => {
            if(item.city == mainData.name) {
            return (
                <SafeAreaView style={{flex:1}}>
                <TouchableOpacity
                onPress = {()=> props.navigation.navigate("RestPage", {item})}

        
                >
                  <View >
                    <Image style={{ height:Dimensions.get("window").height/4, padding:5, margin:10 }} source={{uri: item.image}} />
                    <Text style ={{ fontSize:20,fontWeight:"bold",padding:5, margin:5}}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                </SafeAreaView>
            );}
          };

    return(
      <SafeAreaView style={{flex:1, backgroundColor:"#E6CF8B" }}>
        
        <Text style={styles.name} >{mainData.name} Restaurants</Text>
        <TextInput
        style={styles.input}
            value={searchValue}
            placeholder="Search Restaurant.."
            onChangeText={(searchText) => setSearchValue(searchText)}
          />
        <View>
          <FlatList 
         keyExtractor={(_, index) => index.toString()}
          data={displayList} renderItem={renderRestaurants} />
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    name:{
      fontWeight:"bold",
      fontSize:25,
      padding:5,
      color:"#22264B",
      alignSelf:"center"
    },
    input:{
      padding:5,
      borderWidth:0.5,
      borderColor:"#22264B",
      margin:10,
      borderRadius:5
    }
  })
  
    

export { Restaurants }