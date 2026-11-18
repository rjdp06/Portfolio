import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as contexts from "./Contexts";

// function useBreakpoint() {
//   const { width } = useWindowDimensions();
//   if (width < 640) return 'mobile';
//   if (width < 1024) return 'tablet';
//   return 'desktop';
// }

// const {HeaderBtn} = RootLayout();
// HeaderBtn(2);

export default function RootLayout() {
  // const [currentTab, setCurrentTab] = useState(0);
  
  // useEffect(()=>{
  //   if (currentTab==0) router.replace("/(tabs)");
  //   if (currentTab==1) router.replace("/(tabs)/Skills");
  //   if (currentTab==2) router.replace("/(tabs)/Projects");
  //   if (currentTab==3) router.replace("/(tabs)/WhyMe");
  //   if (currentTab==4) router.replace("/(tabs)/Contact");
  //   // console.log("Route");
  // },[currentTab]);

  // function HeaderBtn(props){
  //   setCurrentTab(props);
  // }

  return (
    <SafeAreaProvider
      style={styles.screen}
    >
      {/* <View style={styles.content}>
        <Text style={[styles.text,{color:currentTab == 0 ? contexts.headerColor : contexts.secondaryTextColor}]} onPress={()=> HeaderBtn(0)}>DashBoard</Text>
        <Text style={[styles.text,{color:currentTab == 1 ? contexts.headerColor : contexts.secondaryTextColor}]} onPress={()=> HeaderBtn(1)}>Skill</Text>
        <Text style={[styles.text,{color:currentTab == 2 ? contexts.headerColor : contexts.secondaryTextColor}]} onPress={()=> HeaderBtn(2)}>Projects</Text>
        <Text style={[styles.text,{color:currentTab == 3 ? contexts.headerColor : contexts.secondaryTextColor}]} onPress={()=> HeaderBtn(3)}>Why Me?</Text>
        <Text style={[styles.text,{color:currentTab == 4 ? contexts.headerColor : contexts.secondaryTextColor}]} onPress={()=> HeaderBtn(4)}>Contact</Text>
      </View>
      <Slot> */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      {/* </Slot> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: contexts.primaryColor,
    // padding: 20,
    // margin : 10
  },
  content: {
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