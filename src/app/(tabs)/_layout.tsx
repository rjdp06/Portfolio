import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import * as contexts from "../Contexts";

// function CustomTabBar({ state, descriptors, navigation }){
//   // const [currentTab, setCurrentTab] = useState(0);
//   return (
//     <View style={styles.content}>
//         <Text style={styles.text}>DashBoard</Text>
//         <Text style={styles.text}>Skill</Text>
//         <Text style={styles.text}>Projects</Text>
//         <Text style={styles.text}>Why Me?</Text>
//         <Text style={styles.text}>Contact</Text>
//     </View>
//   );
// }

export default function TabsLayout() {
  // #0E0D0C	#181615	#F5F2EB
  return (
  <Tabs 
  // tabBar={(props) => <CustomTabBar {...props} />}
  screenOptions={{
    headerShown : false, 
    tabBarPosition : "top",
    tabBarActiveBackgroundColor : contexts.primaryColor,
    tabBarInactiveBackgroundColor : contexts.secondaryColor,
    tabBarActiveTintColor : contexts.headerColor,
    tabBarInactiveTintColor : contexts.secondaryTextColor,
    tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          fontFamily: contexts.fontPara,
          textAlign : 'center'
    },
    tabBarStyle : {
      paddingTop : 30,
      alignItems : 'flex-end',
      justifyContent : 'flex-end',
      // flexWrap: 'wrap',       // Moves overflowing tabs to the next line
      height: 80,
      backgroundColor: contexts.primaryColor, // dark background color
      borderTopWidth: 0,          // Removes default top hairline border
      borderBottomWidth: 0,       // Removes bottom border
      borderLeftWidth: 0,         // Removes left border
      borderRightWidth: 0,         // Removes right border
      borderWidth: 0,             // Clears any remaining borders on Web
      borderColor: contexts.primaryColor, // Ensures no border color bleeds through
      elevation: 0,               // Removes Android shadow line
      shadowOpacity: 0,           // Removes iOS/Web shadow
      shadowOffset: { width: 0, height: 0 },
    },
    tabBarIconStyle : {display : "none"},
    tabBarItemStyle: {
      // width : 150
      // maxWidth: 1500,           // Ensures "DashBoard" always has enough width
      // paddingVertical: 4,
  },
  }}>
    <Tabs.Screen 
    name="index" 
    options={{
      title : "DashBoard",
    }}
    />
    <Tabs.Screen name="Skills" />
    <Tabs.Screen name="Projects" />
    <Tabs.Screen name="WhyMe" />
    <Tabs.Screen name="Contact" />
  </Tabs>
  );
}

const styles = StyleSheet.create({
  content: {
      backgroundColor : contexts.primaryColor,
      alignItems: "center",
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 15,
      // alignSelf: 'center',
      margin : 20
    },
    text:{ 
      fontFamily: contexts.fontPara, 
      color: contexts.secondaryTextColor, 
      fontSize: 16, marginBottom: 4 
    }
});