// This file exports a function, renderDrawerItems, that takes 'props' as an argument.
// It is intended to be used for rendering custom drawer items with icons and labels.

// Import necessary modules and components.
import { DrawerItem } from "@react-navigation/drawer";
import themes from "./themes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Define the 'renderDrawerItems' function that receives 'props' as an argument.
export default renderDrawerItems = (props) => {
  // Destructure 'state' and 'navigation' from 'props'.
  const { state, navigation } = props;

  // Map through the 'state.routeNames' to render each drawer item.
  return state.routeNames.map((routeName, index) => {
    // Determine if the current drawer item is focused based on the index in 'state'.
    const focused = index === state.index;

    // Create a label for the drawer item. If it is the focused item, add a bullet ('•') in front of the label.
    const label = getFocusedRouteNameFromRoute(state) === routeName ? '• ' + routeName : routeName;

    // Return a 'DrawerItem' with the configured label, label style, and icon for each routeName.
    return (
      <DrawerItem
        key={routeName}
        label={label}
        labelStyle={styles.drawerItemLabel}
        onPress={() => navigation.navigate(routeName)}
        icon={({ color, size }) => {
          // Define icon logic based on the routeName.
          // If the item is focused, use the filled icon, otherwise use the outlined icon.
          switch (routeName) {
            case 'Events':
              return <Ionicons name={!focused ? "timer-outline" : "timer"} size={size} color={!focused ? color : themes.colors.secondary} />;
            case 'Key Slots':
              return <Ionicons name={!focused ? "albums-outline" : "albums"} size={size} color={!focused ? color : themes.colors.secondary} />;
            case 'Cards':
              return <Ionicons name={!focused ? "card-outline" : "card"} size={size} color={!focused ? color : themes.colors.secondary} />;
            case 'Settings':
              return <Ionicons name={!focused ? "settings-outline" : "settings"} size={size} color={!focused ? color : themes.colors.secondary} />;
            case 'Tester':
              return <Ionicons name={!focused ? "warning-outline" : "warning"} size={size} color={!focused ? color : themes.colors.secondary} />;
            default:
              return null;
          }
        }}
      />
    );
  });
};

// Define the styles for the drawer item labels.
const styles = StyleSheet.create({
  drawerItemLabel: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

// This file is designed to be used for rendering customized drawer items with icons and labels.
// It allows easy customization of drawer items based on the routeName and focused status.
// The function returns a list of 'DrawerItem' components, which can be rendered inside the custom drawer content component.
// The icons are conditionally rendered based on the focused status to display filled or outlined versions.
// By using this 'renderDrawerItems' function, you can achieve a consistent and visually appealing drawer navigation experience.
