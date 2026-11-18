import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import * as contexts from "../Contexts";

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const DATA = contexts.fullData;

/* -------------------------------------------------------------------------- */
/*  Responsive helper                                                         */
/* -------------------------------------------------------------------------- */

function useBreakpoint() {
  const { width } = useWindowDimensions();
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Flex ratio only applies when children sit side by side.
const grow = (isRow, n = 1) => (isRow ? { flex: n, minWidth: 0 } : null);

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function Card({ title, children, style, nav }) {
  return (
    <View style={[styles.card, style]} onClick={()=>{router.push(`/(tabs)/${nav}`);}} >
      {title ? <Text style={styles.cardTitle}>{title}</Text> : null}
      {children}
    </View>
  );
}

function Row({ isRow, children, style }) {
  return <View style={[{ flexDirection: isRow ? 'row' : 'column', gap: 16 }, style]}>{children}</View>;
}

function Pill({ label, bg, color }) {
  return (
    <View style={[styles.pill, { backgroundColor: bg }]}>
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </View>
  );
}

/**
 * Circular progress ring built from core Views only (no SVG).
 * Two clipped half-circles are rotated to show the percentage.
 */
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

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

function Header({ bp }) {
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.welcome}>Portfolio Dashboard</Text>
      <Text style={[styles.title, bp === 'mobile' && { fontSize: 32 }]}>{DATA.name}</Text>
      <Text style={styles.date}>Date, {date}</Text>
    </View>
  );
}

function SummaryCard({ isRow }) {
  return (
    <Card title="SUMMARY" nav="" style={grow(isRow, 2)}>
      <Text style={styles.summaryText}>{DATA.summary}</Text>
    </Card>
  );
}

function StatsCard({ isRow, bp }) {
  const itemWidth = bp === 'mobile' ? '50%' : '25%';
  return (
    <Card title="KEY STATS " nav="" style={grow(isRow, 1)}>
      <View style={styles.statsWrap}>
        {DATA.stats.map((s) => (
          <View key={s.label} style={[styles.statItem, { width: itemWidth }]}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

function SkillsCard({ isRow, bp }) {
  const size = bp === 'mobile' ? 72 : 80;
  return (
    <Card title="SKILLS" nav="Skills" style={grow(isRow, 1.15)}>
      <View style={styles.skillsWrap} >
        {DATA.skills.map((s) => (
          <View key={s.name} style={styles.skillItem}>
            <ProgressRing value={s.level} color={s.ring} label={s.name} size={size} />
            <Pill label={s.name} bg={s.chipBg} color={s.chipText} />
          </View>
        ))}
      </View>
    </Card>
  );
}

function ExperienceCard({ isRow }) {
  return (
    <Card title="EXPERIENCE" nav="WhyMe" style={grow(isRow, 1)}>
      {DATA.experience.map((job, i) => {
        const last = i === DATA.experience.length - 1;
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

// function ProjectPreview(image) {
  // if (image) {
    // const source = typeof image === 'string' ? { uri: image } : image;
    // return <Image source={image} style={styles.previewImage} resizeMode="cover" />;
  // }
  // Mock preview made of Views so the card works without any asset
  // return (
  //   <View style={styles.previewImage}>
  //     <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1a9e9a' }]} />
  //     <View style={[styles.previewTint, { backgroundColor: '#2d3fa6' }]} />
  //     <View style={styles.mockDevice}>
  //       <View style={styles.mockSidebar} />
  //       <View style={{ flex: 1, padding: 8, gap: 6 }}>
  //         <View style={styles.mockBarWide} />
  //         <View style={{ flexDirection: 'row', gap: 6 }}>
  //           <View style={styles.mockBlock} />
  //           <View style={styles.mockBlock} />
  //           <View style={styles.mockBlock} />
  //         </View>
  //         <View style={styles.mockChart} />
  //       </View>
  //     </View>
  //   </View>
  // );
// }

function ProjectCard({ isRow }) {
  const p = DATA.project;
  return (
    <Card title="FEATURED PROJECT" nav="Projects" style={grow(isRow, 1.1)}>
      {/* <ProjectPreview image={p.image} /> */}
      <Image source={p.image} style={styles.previewImage} resizeMode="cover"/>
      <View style={styles.projectFooter}>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.projectTitle}>{p.title}</Text>
          <View style={styles.tagRow}>
            {p.tags.map((t) => (
              <Pill key={t.label} label={t.label} bg={t.bg} color={t.color} />
            ))}
          </View>
        </View>
        {/* <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>View Case Study</Text>
        </Pressable> */}
      </View>
    </Card>
  );
}

function AchievementsCard({ isRow }) {
  return (
    <Card title="ACHIEVEMENTS" nav="WhyMe" style={grow(isRow, 1)}>
      {DATA.achievements.map((a, i) => (
        <View key={a.text} style={[styles.listRow, i > 0 && styles.listRowBorder]}>
          {/* <Text style={styles.listIcon}>{a.icon}</Text> */}
          <MaterialCommunityIcons  name={a.icon} color={contexts.primaryTextColor} size={22}/>
          <Text style={styles.achievementText}>{a.text}</Text>
          {/* {a.trailing ? <Text style={styles.listIcon}>{a.trailing}</Text> : null} */}
        </View>
      ))}
    </Card>
  );
}

function EducationCard({ isRow }) {
  return (
    <Card title="EDUCATION" nav="" style={grow(isRow, 1)}>
      {DATA.education.map((e, i) => (
        <View key={e.title} style={[styles.listRow, i > 0 && styles.listRowBorder]}>
          {/* <View style={[styles.eduIcon, { backgroundColor: e.bg }]}>
             <Text style={{ fontSize: 20 }}>{e.icon}</Text>
          </View> */}
          <FontAwesome name={e.icon} color={contexts.primaryTextColor} size={22}/>
          <View style={{ flex: 1, minWidth: 0 }}>
            <Text style={styles.eduTitle}>{e.title}</Text>
            <Text style={styles.eduSub}>{e.sub}</Text>
          </View>
        </View>
      ))}
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/*  Screen                                                                    */
/* -------------------------------------------------------------------------- */

export default function Dashboard() {
  const bp = useBreakpoint();
  // const sideBySide = bp !== 'mobile'; // rows 1 and 2
  const sideBySide = false;
  const threeUp = bp === 'desktop'; // row 3

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, bp === 'mobile' && { padding: 14 }]}
    >
      <View style={styles.inner}>
        <Header bp={bp} />

        <Row isRow={sideBySide}>
          <SummaryCard isRow={sideBySide} />
          <StatsCard isRow={sideBySide} bp={bp} />
        </Row>

        <Row isRow={sideBySide} style={styles.rowGap}>
          <SkillsCard isRow={sideBySide} bp={bp} />
          <ExperienceCard isRow={sideBySide} />
        </Row>

        {threeUp ? (
          <Row isRow style={styles.rowGap}>
            <ProjectCard isRow />
            <AchievementsCard isRow />
            <EducationCard isRow />
          </Row>
        ) : (
          <View style={styles.rowGap}>
            <ProjectCard isRow={false} />
            <Row isRow={bp === 'tablet'} style={{ marginTop: 16 }}>
              <AchievementsCard isRow={bp === 'tablet'} />
              <EducationCard isRow={bp === 'tablet'} />
            </Row>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

/* -------------------------------------------------------------------------- */
/*  Styles                                                                    */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: contexts.primaryColor },
  content: { padding: 24, flexGrow: 1 },
  inner: { width: '100%', maxWidth: 1200, alignSelf: 'center', gap : 32, marginVertical : '10%'},
  rowGap: { marginTop: 16 },

  /* header */
  welcome: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 16, marginBottom: 4 },
  title: { fontFamily: contexts.fontHead, color: contexts.headerColor, fontSize: 60, fontWeight: '700' },
  date: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 12, marginTop: 6 },

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

  /* summary + stats */
  summaryText: { fontFamily: contexts.fontPara, color: contexts.primaryTextColor, fontSize: 15, lineHeight: 23 ,textAlign : 'justify'},
  statsWrap: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 14 },
  statItem: { paddingRight: 6 },
  statValue: { fontFamily: contexts.fontPara, color : contexts.primaryTextColor, fontSize: 22, fontWeight: '700' },
  statLabel: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 12, marginTop: 4, lineHeight: 17 },

  /* skills */
  skillsWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 16, columnGap: 10 },
  skillItem: { alignItems: 'center', gap: 14 },
  ringCenter: { alignItems: 'center', justifyContent: 'center' },
  ringLabel: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 11 },
  ringValue: { fontFamily: contexts.fontHead, fontSize: 13, fontWeight: '600', marginTop: 2 },
  pill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999 },
  pillText: { fontFamily: contexts.fontPara, fontSize: 12, fontWeight: '500' },

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
  jobDetail: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 13, marginTop: 6, lineHeight: 19 },

  /* featured project */
  previewImage: { width: '80%', height: 130, borderRadius: 8, overflow: 'hidden' },
  previewTint: { position: 'absolute', top: 0, right: 0, bottom: 0, width: '30%', opacity: 0.85 },
  mockDevice: {
    position: 'absolute',
    left: '16%',
    right: '16%',
    top: 14,
    bottom: -20,
    backgroundColor: '#f4f6fb',
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  mockSidebar: { width: 26, backgroundColor: '#1d2538' },
  mockBarWide: { height: 8, width: '45%', backgroundColor: '#d5dbe8', borderRadius: 4 },
  mockBlock: { flex: 1, height: 22, backgroundColor: '#e3e8f3', borderRadius: 4 },
  mockChart: { flex: 1, backgroundColor: '#dde4f2', borderRadius: 4 },
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
  button: {
    borderWidth: 1,
    borderColor: contexts.primaryTextColor,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  buttonText: { fontFamily: contexts.fontHead, color: contexts.primaryTextColor, fontSize: 13, fontWeight: '500' },

  /* achievements + education */
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  listRowBorder: { borderTopWidth: 1, borderTopColor: contexts.secondaryTextColor },
  listIcon: { fontSize: 20 },
  achievementText: { flex: 1, fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 14 },
  eduIcon: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  eduTitle: { fontFamily: contexts.fontHead, color: contexts.primaryTextColor, fontSize: 15, fontWeight: '600' },
  eduSub: { fontFamily: contexts.fontPara, color: contexts.secondaryTextColor, fontSize: 13, marginTop: 2 },
});