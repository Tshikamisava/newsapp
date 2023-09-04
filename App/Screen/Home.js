import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadLineSlider from '../components/Home/TopHeadLineSlider';
import HeadlineList from '../components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {

  const [newsList, setNewsList] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory('latest');
  }, []);

  const getNewsByCategory=async(category)=>{
    setLoading(true);
    const result=(await GlobalApi.getByCategory(category)).data;
    console.log(result)
    setNewsList(result.articles)
    setLoading(false)
  }
  const getTopHeadline = async () => {
    try {
      const { data } = await GlobalApi.getTopHeadline();
      setNewsList(data.articles);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor:Color.white}}>
      
        <View style={{display:'flex', flexDirection: 'row',
        alignItems: 'center',
        
         justifyContent: 'space-between' }}>
        <Text style={styles.appName}>Lucky's News</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
        </View>
       
       {/* { Category List } */}
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
        {loading?<ActivityIndicator
        style={{marginTop:Dimensions.get('screen').height*0.40}}
         size={'large'} color={Color.primary} />:
      <View>
        {/* { Top Headline Slider } */}
        <TopHeadLineSlider newsList={newsList}/>
        
        {/* headline list */}

        <HeadlineList newsList={newsList}/>
        </View>
  }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
appName:{
    fontSize:25, 
    fontWeight:'bold',
    color:Color.primary
}
});