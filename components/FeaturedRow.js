import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View className="">
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-gray-400 text-sm px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard.... */}
        <RestaurantCard
          id={123}
          title="Restaurant 1"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          lng="-73.935242"
          lat="40.7128"
        />
        <RestaurantCard
          id={123}
          title="Restaurant 1"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          lng="-73.935242"
          lat="40.7128"
        />
        <RestaurantCard
          id={123}
          title="Restaurant 1"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          lng="-73.935242"
          lat="40.7128"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
