import campusGirlfriendLogo from '../assets/images/campus-girlfriend-logo.png';
import campusGirlfriendUi from '../assets/images/campus-girlfriend-ui.png';
import kokoroticketLogo from '../assets/images/kokoroticket-logo.png';
import kokoroticketUi from '../assets/images/kokoroticket-ui.png';
import mogucodeLogo from '../assets/images/mogucode-logo.png';
import mogucodeUi from '../assets/images/mogucode-ui.png';
import reactionGameUi from '../assets/images/reaction-game-ui.png';

export type Project = {
  title: string;
  description: string;
  role: string;
  status?: string;
  award?: string;
  technologies: string[];
  images?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: '0.2秒の戦い',
    description:
      'React Hooksの理解を深めるために制作した反射神経ゲームです。ユーザーの反応時間を計測して結果を表示し、状態管理やリアルタイムなUI更新について学びました。',
    role: '企画・UI設計・実装',
    technologies: ['React', 'TypeScript', 'React Hooks'],
    images: [reactionGameUi],
  },
  {
    title: 'こころチケット',
    description:
      '親子や友人など、身近な人同士で感謝や思いやりをチケットとして送り合えるiOSアプリです。チケットの作成・送信・利用を通して、人とのつながりを形に残せる体験を目指しています。',
    role: '企画・UI/UX設計・iOS開発・データベース設計',
    status: '個人開発中',
    technologies: ['Swift', 'SwiftUI', 'Supabase', 'SwiftData'],
    images: [kokoroticketLogo, kokoroticketUi],
  },
  {
    title: 'キャンパス彼女',
    description:
      '学生生活で感じる孤独感や不安に寄り添うことを目的としたアプリです。キャラクターからの応援メッセージや授業前の通知を通して、学生生活を少し楽しくする体験を目指しました。',
    role: '企画立案・テックリード・PM・UI/UX設計・フロントエンド・プレゼンテーション',
    award: 'HACK STAGE GROST賞 受賞',
    technologies: ['React Native', 'Expo'],
    images: [campusGirlfriendLogo, campusGirlfriendUi],
  },
  {
    title: 'もぐコード',
    description:
      '入力したコードをキャラクターが食べ、コードの品質に応じて反応が変わるプログラミング学習アプリです。ゲーム感覚で楽しみながら学べる体験を目指しました。',
    role: '企画立案・UI/UX設計・キャラクターデザイン・バックエンド開発・PM・プレゼンテーション',
    award: '技育ハッカソン vol.11 努力賞 受賞',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Gemini API'],
    images: [mogucodeLogo, mogucodeUi],
  },
  {
    title: '学食予約アプリ「ランチる！」',
    description:
      '学生が学食メニューを予約でき、食堂側は売れ筋の把握や発注効率化につなげられるアプリです。食品ロスの削減も意識して企画しました。',
    role: '企画・課題整理・UI設計',
    status: '継続開発中',
    technologies: ['Web App', 'Planning', 'UI'],
  },
  {
    title: 'LINEスタンプ「ぽわシャチ君」',
    description:
      'オリジナルキャラクター「ぽわシャチ君」のLINEスタンプを制作・販売しています。親しみやすいキャラクターと、日常で使いやすい表現を意識して制作しました。',
    role: 'キャラクターデザイン・スタンプ制作',
    technologies: ['Illustration', 'LINE Stamp'],
    link: 'https://store.line.me/stickershop/author/5504464',
  },
];
