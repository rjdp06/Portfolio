
export const primaryColor = "#0E0D0C";
export const secondaryColor = "#0E0D0C";
export const headerColor = "#482179";
export const primaryTextColor = "#CCCCCC";
export const secondaryTextColor = "#7d7d7d";

export const fontHead = "Courier"; //helvetica
export const fontPara = "serif";

export const fullData = {
  name: 'Rajdeep Kumar',
  summary:
    'Software Developer and MCA candidate at NIT Agartala with proven freelance experience building and deploying production-ready full-stack cross-platform applications using React Native, NodeJS, Express, MongoDB, SQL,  TypeScript, and Redux Toolkit. Skilled in managing the full-stack mobile release lifecycle, including offline-first architecture and end-to-end Google Play Store publishing. \nBacked by a strong foundation in Data Structures and Algorithms (DSA) and problem-solving in C++, alongside certified expertise in developing interactive 2D and 3D games using Unity 6 and C#.',
  stats: [
    { value: '300+', label: 'Solved DSA problems' },
    { value: '10+', label: 'Projects Completed' },
    // { value: '15+', label: 'Global Clients' },
    { value: '3+', label: 'Freelancing Project' },
  ],
  skills: [
    { name: 'React-Native', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'SQL', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'MERN', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'Unity Engine', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'C++', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'TypeScript', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    { name: 'Python', level: 85, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Chipi Technology',
      period: 'Aug 2026 - Present',
      detail: 'Led full-stack Dating app project.',
      color: primaryTextColor,
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2024 - present',
      detail: 'Designed, developed, and delivered projects for clients, from requirements through to handover complete project.',
      color: primaryTextColor,
    },
  ],
  project: {
    title: 'RecipeBook (React Native app)',
    tags: [
      { label: 'React-Native', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'React-Hooks', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'Javascript', bg: secondaryTextColor, color: primaryTextColor },
    ],
    // Put a URL or require('./assets/project.png') here to replace the mock preview
    image: require("@/assets/images/recipeBook.png"),
  },
  achievements: [
    { icon: "trophy", text: 'Solved 300+ coding questions on LeetCode and GFG platforms.' },
    { icon: 'medal', text: 'Open Source Contribution (Gssoc 2026)' },
    // { icon: "certificate", text: 'Secured National Rank 824 out of 25,000+ students in NATIONAL TECH EXAM 2023 examination.' },
    { icon: "certificate", text: 'Earned Programming in Java conducted by Swayam and IIT Kharagpur in core Java programming skills.' },
  ],
  education: [
    { icon: "graduation-cap", title: 'Master of Computer Applications', sub: 'National Institute of Technology, Agartala (2025 - 2028)', bg: '#1f4f57' },
    { icon: 'graduation-cap', title: 'Bachelor of Computer Applications', sub: 'Indira Gandhi National Open University, Delhi (2021-2024)', bg: '#25396b' },
  ],
};

export const skills = {
    Frameworks : [
        { name: 'React-Native', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'NodeJS', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Express', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'MongoDB', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Unity', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    ],
    Lang : [
        { name: 'C++', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Java', level: 85, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Python', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'MySQL', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'C', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'C#', level: 90, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    ],
    Tools : [
        { name: 'VS Code', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Git', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Git-Hub', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Postman', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'AI Coding Assistant', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    ],
    Fundamentals : [
        { name: 'Data Structures & Algorithms', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Object Oriented Programming', level: 92, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'DataBase', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
        { name: 'Operating System', level: 95, ring: primaryTextColor, chipBg: secondaryTextColor, chipText: primaryTextColor },
    ],
}

export const projects = [
    {
    title: 'RecipeBook (React Native app)',
    tags: [
      { label: 'React-Native', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'React-Hooks', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'Javascript', bg: secondaryTextColor, color: primaryTextColor },
    ],
    // Put a URL or require('./assets/project.png') here to replace the mock preview
    image: require("@/assets/images/recipeBook.png"),
    link : "https://github.com/rjdp06/RecipeBook"
  },
    {
    title: 'Fruit Game',
    tags: [
      { label: 'Unity', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'C#', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'Game-Dev', bg: secondaryTextColor, color: primaryTextColor },
    ],
    // Put a URL or require('./assets/project.png') here to replace the mock preview
    image: require("@/assets/images/FruitGame.png"),
    link : 'https://github.com/rjdp06/Fruit-game'
  },
    {
    title: 'Tic-Tac-Toe',
    tags: [
      { label: 'React-Native', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'React-Hooks', bg: secondaryTextColor, color: primaryTextColor },
      { label: 'Javascript', bg: secondaryTextColor, color: primaryTextColor },
    ],
    // Put a URL or require('./assets/project.png') here to replace the mock preview
    image: require("@/assets/images/tictactoe.png"),
    link : 'https://github.com/rjdp06/TicTacToe'
  },
];

export const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Chipi Technology',
      period: 'Aug 2026 - Present',
      detail: 'Led full-stack Dating app project.',
      color: primaryTextColor,
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2024 - present',
      detail: 'Designed, developed, and delivered projects for clients, from requirements through to handover complete project.',
      color: primaryTextColor,
    },
    // {
    //   role: 'Student Internship Coordinator',
    //   company: 'Training & Placement Cell, NIT Agartala',
    //   period: "June 2026 – Current",
    //   detail: 'Coordinate the internship process between students, the T&P cell, and recruiting companies, keeping communication and deadlines on track.',
    //   color: primaryTextColor,
    // },
    {
      role: 'Tech & Design Team Member',
      company: 'Entrepreneurship Cell (E-Cell), NIT Agartala',
      period: "June 2026 – Current",
      detail: 'Contribute to a MERN-stack (MongoDB, Express, React, Node.js) campus marketplace and recycling platform for the NIT Agartala community as a Application tester.\nCoordinated with IIIT Nagpur, E-Cell and signed a 1 year long collaboration MoU.',
      color: primaryTextColor,
    },
];

export const achievement = [
    { icon: "trophy", text: 'Solved 300+ coding questions on LeetCode and GFG platforms.' },
    { icon: 'medal', text: 'Open Source Contribution (Gssoc 2026)' },
    // { icon: "certificate", text: 'Secured National Rank 824 out of 25,000+ students in NATIONAL TECH EXAM 2023 examination.' },
    { icon: "certificate", text: 'Earned Programming in Java conducted by Swayam and IIT Kharagpur in core Java programming skills.' },
];

export const contact = [
    { icon: "account-file-text", text: 'View Resume.', link : 'https://drive.google.com/file/d/1uXteItIzRBup0td3Galax5KY7R4hvigw/view?usp=drive_link' },
    { icon: "linkedin", text: 'View LinkedIn Profile.', link : 'https://www.linkedin.com/in/rajdeep-kr/' },
    { icon: 'github', text: 'View GitHub Profile.', link : 'https://github.com/rjdp06' },
    // { icon: "certificate", text: 'Secured National Rank 824 out of 25,000+ students in NATIONAL TECH EXAM 2023 examination.' },
    { icon: "code-tags", text: 'View LeetCode Profile.', link : 'https://leetcode.com/u/RAJD_06/' },
];