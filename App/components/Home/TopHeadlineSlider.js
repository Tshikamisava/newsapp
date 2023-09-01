import React, { useEffect, useState } from "react";
import { FlatList, Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";

function TopHeadLineSlider({newsList}) {
 

  return (
    <View style={{marginTop:15}}>
      <FlatList
        data={newsList}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width: Dimensions.get('screen').width * 0.80,
          marginRight:15 }}>
            <Image source={{ uri: item.urlToImage }} style={{ height:Dimensions.get('screen').width * 0.77,
               borderRadius:10 }} />
              <Text numberOfLines={3} style={{marginTop:10,
              fontSize:23,fontWeight:'800'}}>{item.title}</Text>
              <Text style={{marginTop:5,
                color:Color.primary}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TopHeadLineSlider;
