import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lng,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 py-3">
        <Text className="font-bold pt-2 text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-xs text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
