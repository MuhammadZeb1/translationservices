import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { itemReveal, pageEntrance, sectionReveal, staggerReveal } from '../animations'
import Callout from '../components/Callout'
import { PageIntro } from '../components/PageIntro'

const values = [
  {
    icon: '✦',
    title: 'Exceptional quality',
    description:
      'We focus on accuracy, tone, and context so every translation is clear and dependable.',
  },
  {
    icon: '◎',
    title: 'Customer-first approach',
    description:
      'We listen to your needs and help you choose the right solution for your audience.',
  },
  {
    icon: '文',
    title: 'Global reach',
    description:
      'Our language services help people and organizations communicate across cultures.',
  },
  {
    icon: '✓',
    title: 'Cultural sensitivity',
    description:
      'We consider local meaning and conventions, not just the words on the page.',
  },
]

export function AboutPage() {
  return (
    <motion.main className="page content-page about-page" {...pageEntrance}>
      <motion.section
        className="about-banner"
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <PageIntro
          eyebrow="About us"
          title="Global Translation Services"
          description="A trusted language partner for clear, culturally aware communication."
        />
      </motion.section>

      <motion.section
        className="about-introduction"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-intro-copy">
          <span className="eyebrow">Who we are</span>
          <h2>Connecting people through language.</h2>
          <p>
            Welcome to Global Translation Services, a provider of specialist
            linguistic solutions. Our team brings together skilled translators
            and language professionals who care about delivering accurate,
            culturally sensitive communication.
          </p>
          <p>
            Whether you need a personal document translated or language support
            for your organization, we take time to understand your audience,
            purpose, and requirements.
          </p>
          <Link className="about-contact-link" to="/contact">
            Talk to our team <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="about-intro-art" aria-hidden="true">
          <span className="about-speech about-speech--one">Hello</span>
          <span className="about-speech about-speech--two">مرحبا</span>
          <div className="about-globe">
            <span>言葉</span>
            <i />
            <i />
          </div>
          <span className="about-art-caption">Many languages. One connection.</span>
        </div>
      </motion.section>

      <motion.section
        className="about-values-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="about-section-heading">
          <span className="eyebrow">Why choose us?</span>
          <h2>Care in every word. Confidence in every conversation.</h2>
          <p>
            We combine professional standards with a personal approach to make
            every language project feel straightforward.
          </p>
        </div>
        <motion.div
          className="about-values-grid"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.article
              className={`about-value-card about-value-card--${index + 1}`}
              key={value.title}
              variants={itemReveal}
              whileHover={{ y: -4 }}
            >
              <span aria-hidden="true">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="about-partner-panel"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <span className="eyebrow">Partner with us</span>
          <h2>Language support that moves your work forward.</h2>
          <p>
            From document translation and localization to interpreting and
            transcription, we help you find the right service for your project.
            Tell us what you need and we’ll guide you through the next steps.
          </p>
          <Link className="about-contact-link" to="/services">
            Explore our services <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ul>
          <li><span aria-hidden="true">✓</span> Clear communication from the start</li>
          <li><span aria-hidden="true">✓</span> Solutions shaped around your needs</li>
          <li><span aria-hidden="true">✓</span> Careful handling of every project</li>
          <li><span aria-hidden="true">✓</span> Support across a wide range of services</li>
        </ul>
      </motion.section>

      <Callout />
    </motion.main>
  )
}
