import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { itemReveal, pageEntrance, sectionReveal, staggerReveal } from '../animations'
import Callout from '../components/Callout'
import { PageIntro } from '../components/PageIntro'

const serviceCards = [
  {
    icon: '◉',
    title: 'Interpretation services',
    description:
      'Professional support for meetings, conferences, appointments, and remote conversations.',
  },
  {
    icon: '▤',
    title: 'Transcription services',
    description:
      'Accurate transcripts for interviews, presentations, recordings, and other media.',
  },
  {
    icon: '✧',
    title: 'Localization services',
    description:
      'Adapt your content, website, or product for the language and culture of each audience.',
  },
  {
    icon: '文',
    title: 'Document translation',
    description:
      'Carefully reviewed translations for personal, academic, and business documents.',
  },
  {
    icon: '⚖',
    title: 'Legal translation',
    description:
      'Clear translations for contracts, court documents, and other legal materials.',
  },
  {
    icon: '✓',
    title: 'Immigration translation',
    description:
      'Certified translations for applications and supporting official documents.',
  },
]

const reasons = [
  {
    icon: '⌕',
    title: 'Personal support',
    description:
      'Talk with our team and get help choosing the service that fits your project.',
  },
  {
    icon: '✓',
    title: 'Quality you can trust',
    description:
      'Experienced language professionals focus on accuracy, clarity, and context.',
  },
  {
    icon: '↗',
    title: 'Reliable delivery',
    description:
      'We agree on your requirements and timing before work on your project begins.',
  },
  {
    icon: '♡',
    title: 'A clear process',
    description:
      'Get straightforward communication from your first enquiry to final delivery.',
  },
]

export function ServicesPage() {
  return (
    <motion.main className="page content-page services-page" {...pageEntrance}>
      <motion.section
        className="services-overview"
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="services-overview-copy">
          <PageIntro
            eyebrow="Services"
            title="We focus on many industries."
            description="Our translation services are designed to help you communicate clearly. From official documents to multilingual meetings, find language support for your needs."
          />
          <p className="services-overview-note">
            Every project is different. Tell us what you need and we’ll help
            you choose the right service and next steps.
          </p>
        </div>
        <div className="services-overview-art" aria-hidden="true">
          <div className="services-art-message services-art-message--one">hello</div>
          <div className="services-art-message services-art-message--two">你好</div>
          <div className="services-art-people"><i /><i /><i /></div>
          <span className="services-art-caption">Words connect us</span>
        </div>
      </motion.section>

      <motion.section
        className="services-list-section"
        aria-label="Our services"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="services-list-heading">
          <div>
            <span className="eyebrow">Language solutions</span>
            <h2>Professional services for every conversation.</h2>
          </div>
          <Link className="services-all-link" to="/contact">
            Discuss your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <motion.div
          className="services-list-grid"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {serviceCards.map((service) => (
            <motion.div key={service.title} variants={itemReveal}>
            <Link className="services-list-card" to="/contact">
              <span className="services-list-icon" aria-hidden="true">
                {service.icon}
              </span>
              <span className="services-list-copy">
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </span>
              <span className="services-list-arrow" aria-hidden="true">›</span>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="services-why"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="services-why-heading">
          <span className="eyebrow">The Global difference</span>
          <h2>Why choose us?</h2>
          <p>
            Choose a language partner who listens to your needs and treats every
            word with care.
          </p>
        </div>
        <motion.div
          className="services-reasons"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => (
            <motion.article className={`services-reason services-reason--${index + 1}`} key={reason.title} variants={itemReveal}>
              <span className="services-reason-icon" aria-hidden="true">
                {reason.icon}
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="services-process"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <span className="eyebrow">Simple from the start</span>
          <h2>How it works</h2>
          <p>
            A few simple steps help us understand your needs and deliver the
            language support you’re looking for.
          </p>
        </div>
        <motion.ol
          className="services-steps"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.li variants={itemReveal}><span>01</span><div><h3>Tell us about your project</h3><p>Share the service, languages, and deadline you have in mind.</p></div></motion.li>
          <motion.li variants={itemReveal}><span>02</span><div><h3>Review your options</h3><p>We’ll confirm the details and recommend the right next step.</p></div></motion.li>
          <motion.li variants={itemReveal}><span>03</span><div><h3>Move forward with confidence</h3><p>Once everything is agreed, our team gets started on your project.</p></div></motion.li>
        </motion.ol>
      </motion.section>

      <Callout />
    </motion.main>
  )
}
