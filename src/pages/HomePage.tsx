import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { itemReveal, pageEntrance, sectionReveal, staggerReveal } from '../animations'
import Callout from '../components/Callout'
import { services } from '../data/services'

const languageOptions = [
  { name: 'English', region: 'Europe & worldwide', width: '96%' },
  { name: 'Arabic', region: 'Middle East & North Africa', width: '76%' },
  { name: 'German', region: 'Europe', width: '82%' },
  { name: 'French', region: 'Europe, Africa & worldwide', width: '78%' },
  { name: 'Chinese', region: 'East Asia', width: '71%' },
  { name: 'Spanish', region: 'Europe & Latin America', width: '88%' },
  { name: 'Portuguese', region: 'Europe & Latin America', width: '67%' },
  { name: 'Italian', region: 'Europe', width: '63%' },
  { name: 'Urdu', region: 'South Asia', width: '59%' },
  { name: 'Japanese', region: 'East Asia', width: '57%' },
]

export function HomePage() {
  return (
    <motion.main className="page home-page" {...pageEntrance}>
      <motion.section
        className="home-hero"
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="home-copy">
          <span className="eyebrow">Global Translation Services</span>
          <h1>Certified translation services for your business needs.</h1>
          <p>
            Professional translation and interpretation support to help your
            words reach people clearly in every language.
          </p>
          <div className="hero-actions">
            <Link className="hero-order" to="/contact">
              Enroll now <span aria-hidden="true">▶</span>
            </Link>
            <Link className="secondary-action" to="/services">
              Explore services
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Language learning and translation">
          <div className="desk-laptop">
            <div className="laptop-screen">
              <span>Bonjour</span><span>مرحبا</span><span>Hola</span>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="desk-paper">
            <span>Language connects us.</span>
            <i>言葉 · Sprache · idioma</i>
          </div>
          <div className="visual-stamp">50+<small>LANGUAGES</small></div>
        </div>
      </motion.section>

      <motion.section
        className="welcome-band"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="welcome-copy">
          <p>
            “We provide certified translation and interpretation services with
            our agency. From precise translations to seamless interpretations,
            we excel in bridging language barriers. Trust our expertise for
            accurate, culturally sensitive communication in over 50 languages.
            Elevate your global presence with our bespoke solutions. Get in
            touch today for exceptional linguistic support.”
          </p>
          <p>We offer flexible translation and interpreting services that fit your needs.</p>
        </div>
        <Link className="welcome-button" to="/contact">
          Enroll now <span aria-hidden="true">▶</span>
        </Link>
      </motion.section>

      <motion.section
        className="offer-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="landing-heading">
          <span className="eyebrow">What we offer</span>
          <h2>Professional services<br />translation, interpreting<br />&amp; localization.</h2>
        </div>
        <div className="offer-visual" aria-hidden="true">
          <span>hello</span><span>こんにちは</span><span>مرحبا</span>
        </div>
        <motion.div
          className="offer-cards"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            ['↔', 'Interpreting is our specialty', 'Telephone, conference, personal, and remote interpreting for your needs.'],
            ['文', 'Qualified language specialists', 'Experienced linguists help your message stay accurate and natural.'],
            ['•••', 'A wide range of services', 'From consecutive interpreting to localization, we can help.'],
            ['▤', 'Customized transcripts', 'Clear transcription services for a wide range of media types.'],
          ].map(([icon, title, description]) => (
            <motion.article className="offer-card" key={title} variants={itemReveal}>
              <span className="offer-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="translation-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="translation-story">
          <div className="people-visual" aria-hidden="true">
            <span className="people-speech people-speech--one">hello!</span>
            <span className="people-speech people-speech--two">مرحبا</span>
            <div className="people-shapes"><i /><i /><i /></div>
          </div>
          <div className="translation-copy">
            <span className="eyebrow">Professional translation services</span>
            <h2>Clear communication, across every language.</h2>
            <p>Our agency offers translation, SEO translation, and interpretation services in many language combinations, from the most common to the most rare.</p>
            <p>Choose the right level of review for your needs, from translation to careful proofreading.</p>
            <Link className="learn-button" to="/services">Learn more <span aria-hidden="true">?</span></Link>
          </div>
        </div>
        <motion.div
          className="translation-cards"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {['Document translation', 'Transcription services', 'Immigration services', 'Legal translation'].map((title, index) => (
            <motion.div key={title} variants={itemReveal}>
            <Link className="translation-card" to="/services">
              <span className="translation-card-icon" aria-hidden="true">{['▤', '◉', '⌂', '⚖'][index]}</span>
              <h3>{title}</h3>
              <p>{services[index].description}</p>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="industries-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="industries-heading">
          <div><span className="eyebrow">Professional services</span><h2>We focus on many industries</h2></div>
          <Link className="industries-button" to="/services">› &nbsp; View all services</Link>
        </div>
        <div className="industry-content">
          <div className="industry-visual" aria-hidden="true"><span>Let's<br />understand<br />each other.</span></div>
          <motion.div
            className="industry-list"
            variants={staggerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              ['♧', 'Interpretation services', 'Support for conferences, meetings, and events in multiple languages.'],
              ['✧', 'Localization services', 'Adapt content, software, and websites for diverse languages and cultures.'],
              ['⚖', 'Legal translation', 'Certified translations for contracts, court documents, and official records.'],
              ['▤', 'Business translation', 'Clear communication for teams, clients, and global business partners.'],
            ].map(([icon, title, description]) => (
              <motion.div key={title} variants={itemReveal}>
              <Link className="industry-row" to="/services">
                <span aria-hidden="true">{icon}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <b aria-hidden="true">›</b>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="quality-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="quality-tabs">
          <span>Best quality</span><span>Fast &amp; punctual</span><span>Competitive prices</span>
        </div>
        <div className="quality-copy">
          <span className="eyebrow">Not very well in a foreign language?</span>
          <h2>Everyone is able to sharpen their skills!</h2>
          <p>Whether you need general, business, executive, technical, or exam training, we can help you find the right language support for your goals.</p>
          <ul><li>Letter translations</li><li>Birth certificates</li><li>Marriage and divorce certificates</li><li>Licenses and permits</li><li>Judicial orders</li></ul>
        </div>
      </motion.section>

      <motion.section
        className="languages-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="languages-copy">
          <span className="eyebrow">Popular translation languages</span>
          <h2>Find the right words for every audience.</h2>
          <p>
            From everyday communication to specialist documents, our
            translation and interpretation services help you connect across
            cultures. Here are some of the languages we work with.
          </p>
          <div className="language-stats">
            <div><strong>50+</strong><span>languages supported</span></div>
            <div><strong>Worldwide</strong><span>language coverage</span></div>
          </div>
          <div className="language-regions" aria-label="Regions covered">
            <span>Europe</span><span>Asia</span><span>Middle East</span>
            <span>Africa</span><span>Americas</span>
          </div>
          <Link className="learn-button" to="/services">Learn more <span aria-hidden="true">?</span></Link>
        </div>
        <motion.div
          className="language-bars"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h3>Commonly requested languages</h3>
          {languageOptions.map((language) => (
            <motion.div className="language-bar" key={language.name} variants={itemReveal}>
              <div>
                <span>{language.name}</span>
                <span>{language.region}</span>
              </div>
              <span className="bar-track" aria-hidden="true">
                <i style={{ width: language.width }} />
              </span>
            </motion.div>
          ))}
          </motion.div>
      </motion.section>

      <motion.section
        className="interpretation-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="interpretation-heading">
          <div><span className="eyebrow">Trusted interpretation</span><h2>High professional interpretation services you can trust.</h2></div>
          <p>Welcome to our trusted interpretation services, ensuring seamless communication for your needs. Our skilled interpreters support multilingual conversations across industries and contexts.</p>
        </div>
        <motion.div
          className="interpretation-gallery"
          aria-label="Interpretation services"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {['Conversation has no borders.', 'Listen', 'Understand', 'Connect'].map((label) => (
            <motion.div key={label} variants={itemReveal}><span>{label}</span></motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="why-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Why choose us</h2>
        <div className="why-layout">
          <motion.div
            className="why-cards"
            variants={staggerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              ['◉', '24/7 customer service', "Unlock global opportunities with support when you need it."],
              ['✓', 'Quality guarantee', 'Careful work from experienced language professionals.'],
              ['↗', 'Fast delivery', 'Reliable timelines to keep your project moving.'],
              ['♡', 'Free consultation', 'Tell us about your needs and find the right service.'],
            ].map(([icon, title, description]) => (
              <motion.article key={title} variants={itemReveal}>
                <span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{description}</p>
              </motion.article>
            ))}
          </motion.div>
          <div className="why-visual"><span>“</span><p>Good words open doors.</p></div>
        </div>
      </motion.section>
      <Callout />
    </motion.main>
  )
}
