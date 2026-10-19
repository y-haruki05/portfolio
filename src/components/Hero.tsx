import heroImage from '../assets/images/hero.jpg';

function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Portfolio hero">
      <img src={heroImage} alt="ポートフォリオの背景" className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">FRONTEND / iOS DEVELOPER PORTFOLIO</p>
        <h1>
          Portfolio
          <span>HARUKI YAMAMOTO</span>
        </h1>
        <p className="hero-lead">
          ReactやSwiftUIを中心に、Web・iOSアプリを開発しています。UI/UX設計から実装まで、使う人の気持ちに寄り添ったプロダクトづくりを大切にしています。
        </p>
      </div>
    </section>
  );
}

export default Hero;
