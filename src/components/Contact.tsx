import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section contact-section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="contact"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>Contact</p>
        <h2>お問い合わせ</h2>
      </div>
      <div className="contact-panel">
        <p>ポートフォリオをご覧いただきありがとうございます。WebやiOSアプリの開発を通して、使う人にとって価値のある体験を届けられるエンジニアを目指しています。</p>
        <a href="mailto:y.haruki328@gmail.com">Email: y.haruki328@gmail.com</a>
        <a href="https://github.com/y-haruki05" target="_blank" rel="noreferrer">
          GitHub: github.com/y-haruki05
        </a>
        <a href="https://twitter.com/y_haruki05" target="_blank" rel="noreferrer">
          X / Twitter: @y_haruki05
        </a>
      </div>
    </section>
  );
}

export default Contact;
