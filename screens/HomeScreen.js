import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white p-5">
      {/* header */}
      <View className="flex-row items-center pb-4 space-x-2 mx-4">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 p-4 bg-gray-300 rounded-full "
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={26} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
          <SearchIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurant & cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={24} color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
        scrollBehavior="smooth"
      >
        {/* categories */}
        <Categories />

        {/* Offers near you */}
        <FeaturedRow
          id="123"
          title="Offers near you"
          description="Why not support your local retaurant tonight?"
        />
        {/* Featured row */}
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* Tasty Discount*/}
        <FeaturedRow
          id="12345"
          title="Tasty Discount"
          description="Everyone can enjoy a discount on their first order"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
