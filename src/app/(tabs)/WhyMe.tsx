import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as contexts from '../Contexts';

// const DATA = contexts.fullData;
const achiev = contexts.achievement;
const Exp = contexts.experience;

function useBreakpoint() {
  const { width } = useWindowDimensions();
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Flex ratio only applies when children sit side by side.
const grow = (isRow, n = 1) => (isRow ? { flex: n, minWidth: 0 } : null);

function ExperienceCard({ isRow }) {
  return (
    <Card title="EXPERIENCE" nav="" style={grow(isRow, 1)}>
      {Exp.map((job, i) => {
        const last = i === Exp.length - 1;
        return (
          <View key={job.role} style={styles.timelineRow}>
            <View style={styles.timelineRail}>
              <View style={[styles.dotOuter, { backgroundColor: job.color + '33' }]}>
                <View style={[styles.dotInner, { backgroundColor: job.color }]} />
              </View>
              {/* {!last ? <View style={[styles.railLine, { backgroundColor: job.color + '88' }]} /> : null} */}
            </View>
            <View style={[styles.timelineBody, !last && { paddingBottom: 18 }]}>
              <View style={styles.timelineHead}>
                <Text style={styles.jobRole}>{job.role}</Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobDetail}>{job.detail}</Text>
            </View>
          </View>
        );
      })}
    </Card>
  );
}

function AchievementsCard({ isRow }) {
  return (
    <Card title="ACHIEVEMENTS" nav="" style={grow(isRow, 1)}>
      {achiev.map((a, i) => (
        <View key={a.text} style={[styles.listRow, i > 0 && styles.listRowBorder]}>
          {/* <Text style={styles.listIcon}>{a.icon}</Text> */}
          <MaterialCommunityIcons name={a.icon} color={contexts.primaryTextColor} size={22} />
          <Text style={styles.achievementText}>{a.text}</Text>
          {/* {a.trailing ? <Text style={styles.listIcon}>{a.trailing}</Text> : null} */}
        </View>
      ))}
    </Card>
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

export default function WhyMe() {
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
        <ExperienceCard isRow={false} />
        <AchievementsCard isRow={false} />
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

  /* experience */
  timelineRow: { flexDirection: 'row' },
  timelineRail: { width: 28, alignItems: 'center' },
  dotOuter: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  dotInner: { width: 10, height: 10, borderRadius: 5 },
  railLine: { width: 2, flex: 1, marginTop: 2 },
  timelineBody: { flex: 1, marginLeft: 10, minWidth: 0 },
  timelineHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' },
  jobRole: { fontFamily: contexts.fontHead, color: contexts.primaryTextColor, fontSize: 16, fontWeight: '600' },
  jobPeriod: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 13 },
  jobCompany: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 13, marginTop: 2 },
  jobDetail: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 13, marginTop: 6, lineHeight: 19, textAlign : 'justify' },

  /* achievements + education */
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
  },


})