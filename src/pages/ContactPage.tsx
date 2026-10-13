import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { itemReveal, pageEntrance, sectionReveal, staggerReveal } from '../animations'
import { PageIntro } from '../components/PageIntro'

export function ContactPage() {
  const [emailNotice, setEmailNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fields = [
      ['Name', formData.get('name')],
      ['Email', formData.get('email')],
      ['Service', formData.get('service')],
      ['Source language', formData.get('sourceLanguage')],
      ['Target language', formData.get('targetLanguage')],
      ['Deadline', formData.get('deadline') || 'Flexible'],
      ['Project details', formData.get('details')],
    ]
    const body = fields.map(([label, value]) => `${label}: ${value}`).join('\n')
    const subject = `Translation enquiry from ${formData.get('name')}`
    const mailto = `mailto:hello@globaltranslationservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setEmailNotice('Opening your email app with your project details. Please send the message there to complete your enquiry.')
    window.location.href = mailto
  }

  return (
    <motion.main className="page content-page contact-page" {...pageEntrance}>
      <PageIntro
        eyebrow="Let's get started"
        title="Tell us what you need."
        description="Share a few details about your project and we’ll help you find the right language service."
      />
      <motion.section
        className="contact-panel"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="contact-message" variants={itemReveal}>
          <span className="eyebrow">Start an order</span>
          <h2>A few details are all we need.</h2>
          <p>
            Tell us a little about your project. We’ll prepare an email with
            your details so you can send your enquiry directly to our team.
          </p>
          <a className="contact-email" href="mailto:hello@globaltranslationservices.com">
            hello@globaltranslationservices.com
          </a>
          <div className="contact-checklist">
            <h3>Helpful details to include</h3>
            <ul>
              <li>The language you’re translating from and to</li>
              <li>The type of document or service you need</li>
              <li>Your preferred deadline</li>
            </ul>
          </div>
        </motion.div>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemReveal}
        >
          <div className="contact-form-heading">
            <span className="eyebrow">Project enquiry</span>
            <h2>Tell us about your project</h2>
            <p>Fields marked <span aria-hidden="true">*</span> are required.</p>
          </div>
          <motion.div
            className="contact-form-grid"
            variants={staggerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.label className="contact-field" variants={itemReveal}>
              <span>Your name <b aria-hidden="true">*</b></span>
              <input autoComplete="name" name="name" required />
            </motion.label>
            <motion.label className="contact-field" variants={itemReveal}>
              <span>Email address <b aria-hidden="true">*</b></span>
              <input autoComplete="email" name="email" type="email" required />
            </motion.label>
            <motion.label className="contact-field contact-field--full" variants={itemReveal}>
              <span>What service do you need? <b aria-hidden="true">*</b></span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Document translation</option>
                <option>Certified translation</option>
                <option>Website localization</option>
                <option>Interpretation</option>
                <option>Transcription</option>
                <option>Not sure yet</option>
              </select>
            </motion.label>
            <motion.label className="contact-field" variants={itemReveal}>
              <span>Translate from <b aria-hidden="true">*</b></span>
              <input name="sourceLanguage" placeholder="e.g. Arabic" required />
            </motion.label>
            <motion.label className="contact-field" variants={itemReveal}>
              <span>Translate to <b aria-hidden="true">*</b></span>
              <input name="targetLanguage" placeholder="e.g. English" required />
            </motion.label>
            <motion.label className="contact-field" variants={itemReveal}>
              <span>Preferred deadline</span>
              <input name="deadline" type="date" />
            </motion.label>
            <motion.label className="contact-field contact-field--full" variants={itemReveal}>
              <span>Project details <b aria-hidden="true">*</b></span>
              <textarea
                name="details"
                placeholder="Tell us what you need translated, approximate length, and any other helpful context."
                rows={5}
                required
              />
            </motion.label>
          </motion.div>
          <button className="contact-submit" type="submit">
            Prepare email enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form-notice" role="status" aria-live="polite">
            {emailNotice}
          </p>
        </motion.form>
      </motion.section>
    </motion.main>
  )
}
