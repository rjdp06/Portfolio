import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as contexts from '../Contexts';

const DATA = contexts.skills;
const grow = (isRow, n = 1) => (isRow ? { flex: n, minWidth: 0 } : null);

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

function Card({ title, children, style, nav }) {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.cardTitle}>{title}</Text> : null}
      {children}
    </View>
  );
}

function Row({ isRow, children, style }) {
  return <View style={[{ flexDirection: isRow ? 'row' : 'column', gap: 16 }, style]}>{children}</View>;
}

function SkillsCard({ isRow, bp , title, path}) {
  const size = bp === 'mobile' ? 72 : 80;
  return (
    <Card title={title} nav="" style={grow(isRow, 1.15)}>
      <View style={styles.skillsWrap} >
        {DATA[path]?.map((s) => (
          <View key={s.name} style={styles.skillItem}>
            <ProgressRing value={s.level} color={s.ring} label={s.name} size={size} />
            <Pill label={s.name} bg={s.chipBg} color={s.chipText} />
          </View>
        ))}
      </View>
    </Card>
  );
}

function ProgressRing({ value, color, label, size = 80, thickness = 6 }) {
  const half = size / 2;
  const pct = Math.max(0, Math.min(100, value));
  const rightDeg = -135 + (Math.min(pct, 50) / 50) * 180;
  const leftDeg = 45 + (Math.max(pct - 50, 0) / 50) * 180;

  const arc = (deg, left) => ({
    position: 'absolute',
    left,
    top: 0,
    width: size,
    height: size,
    borderRadius: half,
    borderWidth: thickness,
    borderColor: 'transparent',
    borderTopColor: color,
    borderRightColor: color,
    transform: [{ rotate: `${deg}deg` }],
  });

  return (
    <View style={{ width: size, height: size }}>
      {/* track */}
      <View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: half,
          borderWidth: thickness,
          borderColor: contexts.primaryColor,
        }}
      />
      {/* first 50% */}
      <View style={{ position: 'absolute', left: half, width: half, height: size, overflow: 'hidden' }}>
        <View style={arc(rightDeg, -half)} />
      </View>
      {/* remaining 50% */}
      {pct > 50 ? (
        <View style={{ position: 'absolute', left: 0, width: half, height: size, overflow: 'hidden' }}>
          <View style={arc(leftDeg, 0)} />
        </View>
      ) : null}
      {/* label */}
      <View style={[StyleSheet.absoluteFill, styles.ringCenter]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.ringLabel, { maxWidth: size - thickness * 2 - 6 }]}
        >
          {label}
        </Text>
        <Text style={[styles.ringValue, { color }]}>{pct}%</Text>
      </View>
    </View>
  );
}

export default function Skills() {

  const sideBySide = false;
  const bp = useBreakpoint();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, bp === 'mobile' && { padding: 14 }]}
    >
      <View style={styles.inner}>

        <Row isRow={sideBySide} style={styles.rowGap} >
          <SkillsCard isRow={sideBySide} bp={bp} title={"Frameworks"} path='Frameworks'/>
        </Row>
        <Row isRow={sideBySide} style={styles.rowGap}>
          <SkillsCard isRow={sideBySide} bp={bp} title={"Languages"} path='Lang'/>
        </Row>
        <Row isRow={sideBySide} style={styles.rowGap}>
          <SkillsCard isRow={sideBySide} bp={bp} title={"Developer Tools"} path='Tools'/>
        </Row>
        <Row isRow={sideBySide} style={styles.rowGap}>
          <SkillsCard isRow={sideBySide} bp={bp} title={"Computer Fundamentals"} path='Fundamentals'/>
        </Row>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: contexts.primaryColor },
  content: { padding: 4, flexGrow: 1 },
  inner: { width: '100%', maxWidth: 1200, alignSelf: 'center', gap : 32, marginVertical : '10%'},
  rowGap: { marginTop: 16 },

  skillsWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 16, columnGap: 10 },
  skillItem: { alignItems: 'center', gap: 14 },
  ringCenter: { alignItems: 'center', justifyContent: 'center' },
  ringLabel: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 14 },
  ringValue: { fontFamily: contexts.fontHead, fontSize: 13, fontWeight: '600', marginTop: 2 },
  pill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999 },
  pillText: { fontFamily: contexts.fontPara, fontSize: 14, fontWeight: '500' },

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
    },
})