import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PersonImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative mt-8">
      {/* first section */}
      <View className="flex-row px-6 items-center space-x-2">
        <View className="bg-black rounded-full w-16 h-16 items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-3xl font-semibold">Travel</Text>
      </View>

      {/* second section */}
      <View className="px-6">
        <View className="mt-6 space-y-1">
          <Text className="text-[#3C6072] text-[40px] mt-5">
            Enjoy the trip with
          </Text>
          <Text className="text-[#4DABB7] text-[38px] font-bold">
            Good Moments
          </Text>
          <Text className="text-[#3C6072] text-base">
            Whether you're searching for a relaxing beach getaway or an
            action-packed city break, our app has got you covered.
          </Text>
        </View>
      </View>

      {/* third section */}

      {/* circle section */}
      <View className="bg-rose-300 w-[300px] h-[300px] rounded-full absolute bottom-0 right-48"></View>
      <View className="bg-blue-300 w-[300px] h-[300px] rounded-full absolute bottom-32 -right-36"></View>

      {/* image */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="zoomInUp"
          easing="ease-in-out"
          source={PersonImage}
          className="w-full h-full object-cover"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="items-center justify-center"
        >
          <View className="absolute bottom-20 border-[#00BCC9] border-l-2 border-r-2 border-t-4 rounded-full w-24 h-24 items-center justify-center">
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount="infinite"
              className="bg-[#00BCC9] w-20 h-20 rounded-full items-center justify-center"
            >
              <Text className="text-3xl text-gray-50 font-bold">Go</Text>
            </Animatable.View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
