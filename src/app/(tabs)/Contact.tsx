import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as contexts from '../Contexts';

const contact = contexts.contact;

function useBreakpoint() {
  const { width } = useWindowDimensions();
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function Row({ isRow, children, style }) {
  return <View style={[{ flexDirection: isRow ? 'row' : 'column', gap: 16 }, style]}>{children}</View>;
}

const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Cannot open URL: ${url}`);
  }
};

function ContactCard({ isRow }) {
  return (
    <View style={styles.card}>
    {/* // <Card title="ACHIEVEMENTS" nav="" style={grow(isRow, 1)}> */}
      {contact.map((a, i) => (
        <View key={a.text} style={[styles.listRow, i > 0 && styles.listRowBorder]} onClick={()=>{openUrl(a.link)}}>
          {/* <Text style={styles.listIcon}>{a.icon}</Text> */}
          <MaterialCommunityIcons name={a.icon} color={contexts.primaryTextColor} size={22} />
          <Text style={styles.achievementText}>{a.text}</Text>
          {/* {a.trailing ? <Text style={styles.listIcon}>{a.trailing}</Text> : null} */}
        </View>
      ))}
    {/* // </Card> */}
    </View>
  );
}

export default function Contact() {
  const bp = useBreakpoint();

  // const sideBySide = bp !== 'mobile';  // rows 1 and 2
  // const threeUp = bp === 'desktop';    // row 3

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        {
          flexDirection: 'column', // Stacks children vertically (up-down)
          gap: 16,
          paddingBottom: 40,
        },
        bp === 'mobile' && { padding: 14 },
      ]}
    >
      <View style={styles.card}>
        <Row isRow={false} style={styles.rowGap}>
          <ContactCard isRow={false} />
        </Row>
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: contexts.primaryColor,
    flexDirection: 'column',
    rowGap: 20
  },
  inner: { width: '100%', maxWidth: 1200, alignSelf: 'center', gap: 32, marginVertical: '10%' },
  rowGap: { marginTop: 16 },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  listRowBorder: { borderTopWidth: 1, borderTopColor: contexts.secondaryTextColor },
  listIcon: { fontSize: 20 },
  achievementText: { flex: 1, fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 14 },

  /* card */
  card: {
    backgroundColor: contexts.secondaryColor,
    borderColor: contexts.secondaryTextColor,
    borderWidth: 0,
    borderRadius: 12,
    padding: '4%',
  },
  cardTitle: {
    fontFamily: contexts.fontHead,
    color: contexts.headerColor,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 14,
  }
  });