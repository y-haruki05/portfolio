export type Skill = {
  name: string;
  category: 'Frontend' | 'iOS / Mobile' | 'Backend / Database' | 'Design / Tools';
  level?: '実装経験あり' | '学習中' | 'ハッカソンで使用' | '個人開発で使用';
};

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend', level: '実装経験あり' },
  { name: 'CSS', category: 'Frontend', level: '実装経験あり' },
  { name: 'JavaScript', category: 'Frontend', level: '実装経験あり' },
  { name: 'TypeScript', category: 'Frontend', level: '学習中' },
  { name: 'React', category: 'Frontend', level: '個人開発で使用' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Swift', category: 'iOS / Mobile', level: '個人開発で使用' },
  { name: 'SwiftUI', category: 'iOS / Mobile', level: '個人開発で使用' },
  { name: 'React Native', category: 'iOS / Mobile', level: 'ハッカソンで使用' },
  { name: 'Expo', category: 'iOS / Mobile', level: 'ハッカソンで使用' },
  { name: 'Node.js', category: 'Backend / Database', level: 'ハッカソンで使用' },
  { name: 'Express', category: 'Backend / Database', level: 'ハッカソンで使用' },
  { name: 'PHP', category: 'Backend / Database', level: '実装経験あり' },
  { name: 'MySQL', category: 'Backend / Database', level: '実装経験あり' },
  { name: 'Python', category: 'Backend / Database' },
  { name: 'FastAPI', category: 'Backend / Database' },
  { name: 'Supabase', category: 'Backend / Database', level: '個人開発で使用' },
  { name: 'Figma', category: 'Design / Tools', level: '学習中' },
  { name: 'Git / GitHub', category: 'Design / Tools', level: '個人開発で使用' },
  { name: 'Docker', category: 'Design / Tools' },
  { name: 'AWS', category: 'Design / Tools' },
  { name: 'UI/UX Design', category: 'Design / Tools' },
  { name: 'PowerPoint', category: 'Design / Tools', level: '実装経験あり' },
];
