import editing1 from '../assets/images/editing1.jpg';
import editing2 from '../assets/images/editing2.jpg';
import editing3 from '../assets/images/editing3.jpg';
import fishing1 from '../assets/images/fishing1.png';
import fishing2 from '../assets/images/fishing2.jpg';
import fishing3 from '../assets/images/fishing3.jpg';
import manga1 from '../assets/images/manga1.jpeg';
import manga2 from '../assets/images/manga2.jpg';
import manga3 from '../assets/images/manga3.webp';

export type Hobby = {
  title: string;
  description: string;
  images: string[];
};

export const hobbies: Hobby[] = [
  {
    title: '動画編集',
    description:
      '動画の構成や演出を考えることが好きで、CapCutやAlight Motionなどを使って編集しています。見ていて楽しい映像づくりを大切にしています。',
    images: [editing1, editing2, editing3],
  },
  {
    title: '漫画',
    description:
      '幅広いジャンルの漫画を読むことが好きです。ストーリーやキャラクターの魅力だけでなく、作品ごとの表現や世界観を楽しんでいます。',
    images: [manga1, manga2, manga3],
  },
  {
    title: '釣り',
    description:
      '海釣りや川釣りを楽しんでいます。自然の中で過ごす時間は、開発や勉強のリフレッシュにもなっています。',
    images: [fishing1, fishing2, fishing3],
  },
];
