import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BookCard from "./components/SearchScreenComponets/BookCard";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookInformationScreen from "./screens/Book_Information_Screen";
import NavigationFooter from "./components/navigationFooter";
export default function App() {
  const Stack = createStackNavigator();
  <SearchScreen></SearchScreen>;
  return (
    <>
      <StatusBar style="light "></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={NavigationFooter}
            name="Navigation-Footer"
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            component={SearchScreen}
            name="SearchScreen"
          ></Stack.Screen>
          <Stack.Screen
            component={BookInformationScreen}
            name={"BookInformationScreen"}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
