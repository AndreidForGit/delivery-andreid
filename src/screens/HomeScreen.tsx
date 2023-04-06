import { 
    View, 
    Text, 
    SafeAreaView, 
    Image, 
    TextInput, 
    ScrollView 
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    UserIcon, 
    ChevronDownIcon, 
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon 
} from "react-native-heroicons/outline"
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../../sanity";
import category from "../../sanity/schemas/category";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [FeaturedCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        SanityClient
        .fetch(
            `
        *[_type == 'featured'] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }`
          )
          .then(data => {
            setFeaturedCategories(data)
          })
    }, [])

    return (
        <SafeAreaView className=" bg-white pt-5">
                {/* Header */}
                <View className=" flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAqjwzzTNSSP9x_YN8zQXOCqkHUrqJ-yEEAc8PogIQAMZ4gIFKoWn26LZXa8bZfgTu-Y&usqp=CAU',
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />

                    <View className=" flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl">
                            Curret location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB"/>
                </View>
                
                {/* Search */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 rounded-xl">
                        <View className=" pt-3 pl-3"><MagnifyingGlassIcon color="gray" size={20}/></View>
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            keyboardType="default"
                        />
                    </View>

                    <AdjustmentsVerticalIcon color="#00CCBB"/>
                </View>
                
                {/* Body */}
                <ScrollView
                    className=" bg-gray-100"
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                >
                    {/* Categories */}
                    <Categories />

                    {/* Featured */}

                    {FeaturedCategories?.map((category) => 
                        <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                        />
                    )}
                </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
