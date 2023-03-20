import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avater } from "../assets";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-1 flex-row justify-between px-8 mt-5">
        <View className="flex-col">
          <Text className="text-3xl font-bold text-[#0B646B]">Discover</Text>
          <Text className="text-3xl text-[#527283]">the beauty today</Text>
        </View>
        <View>
          <Image 
          source={Avater}
          className="w-16 h-16 rounded-xl"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
