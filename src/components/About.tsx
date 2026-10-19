import profileImage from '../assets/images/profile.jpg';
import { qualifications } from '../data/qualifications';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section about-section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="about"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>About</p>
        <h2>自己紹介</h2>
      </div>
      <div className="about-layout">
        <img src={profileImage} alt="山本悠生のプロフィール写真" className="profile-image" />
        <div className="about-copy">
          <h3>山本 悠生</h3>
          <p>ECCコンピュータ専門学校に通う、2028年卒業予定の学生です。</p>
          <p>
            ReactやTypeScriptを使ったWeb開発に加え、現在はSwiftUIを使ったiOSアプリ開発にも力を入れています。
          </p>
          <p>
            ハッカソンでは、企画立案やUI/UX設計、テックリード、進行管理、実装、プレゼンテーションなど、幅広い役割を経験してきました。
          </p>
          <p>
            また、サマーインターンシップにも参加し、チームでの開発やエンジニアの方とのペアプログラミングを経験しました。
          </p>
          <p>
            個人開発では、企画から設計・実装まで主体的に取り組み、ユーザーにとって使いやすく、自然に使いたくなる体験を追求しています。
          </p>
          <p>
            将来はフロントエンドやiOS開発の経験を積み、技術力だけでなく、チームやプロダクト全体を考えられるエンジニアを目指しています。
          </p>
        </div>
      </div>
      <div className="qualifications-panel">
        <h3>保有資格</h3>
        <ul>
          {qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
