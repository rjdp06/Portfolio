import { Image, Linking, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as contexts from '../Contexts';

const DATA = contexts.projects;

function useBreakpoint() {
  const { width } = useWindowDimensions();
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function Pill({ label, bg, color }) {
  return (
    <View style={[styles.pill, { backgroundColor: bg }]}>
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </View>
  );
}

const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Cannot open URL: ${url}`);
  }
};


export default function Projects() {
  const bp = useBreakpoint();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[bp === 'mobile' && { padding: 14 }, { flexDirection: bp === 'mobile' ? 'column' : 'row' }]}
    >
      {DATA.map((val, index) => (
        <View key={index} style={styles.card} onClick={() => openUrl(val.link)}>
          <Text style={styles.cardTitle}>{val.title}</Text>
          <Image source={val.image} style={styles.previewImage} resizeMode="cover" />
          <View style={styles.projectFooter}>
            <View style={{ flexShrink: 1, flex: 1, flexDirection: 'row', height: 'auto', marginBlockEnd: 16 }}>
              {/* <Text style={styles.projectTitle}>{val.title}</Text> */}
              <View style={styles.tagRow}>
                {val.tags.map((t) => (
                  <Pill key={t.label} label={t.label} bg={t.bg} color={t.color} />
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
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

  skillsWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 16, columnGap: 10 },
  skillItem: { alignItems: 'center', gap: 14 },
  ringCenter: { alignItems: 'center', justifyContent: 'center' },
  ringLabel: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 14 },
  ringValue: { fontFamily: contexts.fontHead, fontSize: 13, fontWeight: '600', marginTop: 2 },
  pill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999 },
  pillText: { fontFamily: contexts.fontPara, fontSize: 14, fontWeight: '500' },

  card: {
    flex: 0.3,
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    // gap: 16,
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
  },

  previewImage: { width: '100%', height: 150, borderRadius: 8, overflow: 'hidden' },
  projectFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  projectTitle: { fontFamily: contexts.fontHead, color: contexts.primaryTextColor, fontSize: 15, fontWeight: '700' },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
})