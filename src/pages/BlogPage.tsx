import { useState } from 'react'
import { motion } from 'framer-motion'
import { itemReveal, pageEntrance, sectionReveal, staggerReveal } from '../animations'

const articles = [
  {
    category: 'Translation tips',
    title: 'Enhance communication with professional document translation',
    date: 'May 3, 2024',
    readTime: '5 min read',
    description:
      'Professional document translation helps preserve meaning, tone, and important details when information crosses languages. Learn what to prepare before a translation and how to make the review process smoother.',
    detail:
      'Start with a clear, readable source document and let your translator know who will read it and how it will be used. If the document is for an official purpose, check whether certification or a specific format is required before placing your order.',
    visual: 'documents',
    symbol: 'Aa',
  },
  {
    category: 'Language & culture',
    title: 'The art of drawing readers in: your attractive post title goes here',
    date: 'May 3, 2024',
    readTime: '4 min read',
    description:
      'An engaging introduction gives readers a reason to stay. Clear language, a specific focus, and a thoughtful tone can make your content easier to understand.',
    detail:
      'When content is translated, a direct word-for-word version may not have the same effect for a new audience. Share your intended tone and audience so the language specialist can preserve the purpose of your message.',
    visual: 'writing',
    symbol: '文',
  },
  {
    category: 'Interpreting',
    title: 'Mastering the first impression: your interpreting post title goes here',
    date: 'May 3, 2024',
    readTime: '6 min read',
    description:
      'Good preparation helps interpreted conversations feel more natural. A little context before a meeting can help everyone participate with confidence.',
    detail:
      'Before an interpreted meeting, share the agenda, names, relevant terminology, and the preferred interpreting format. Remember to speak in short sections and allow time for each message to be interpreted.',
    visual: 'meeting',
    symbol: '◉',
  },
  {
    category: 'For businesses',
    title: 'The most useful languages to learn in 2026 and beyond',
    date: 'January 15, 2026',
    readTime: '7 min read',
    description:
      'The right language priorities depend on your audience, goals, and the places you work. Start by understanding the communities you want to reach.',
    detail:
      'For organizations, it can be more useful to identify the languages your customers and teams already use than to follow a general ranking. Local needs, accessibility, and the kind of content you share should guide your choices.',
    visual: 'library',
    symbol: 'Aa',
  },
  {
    category: 'Technology',
    title: 'Everything seems possible with artificial intelligence—for better or worse',
    date: 'January 3, 2026',
    readTime: '6 min read',
    description:
      'Translation technology can speed up first drafts, but sensitive or specialist content still benefits from careful human review.',
    detail:
      'Automated tools may miss context, idioms, or details that matter to your audience. Consider the consequences of an error and choose an appropriate review process before sharing translated content.',
    visual: 'technology',
    symbol: 'AI',
  },
  {
    category: 'Interpreting',
    title: 'Remote interpreting services: our contribution to international communication',
    date: 'July 1, 2025',
    readTime: '5 min read',
    description:
      'Remote interpreting can connect people across locations for consultations, meetings, and other conversations.',
    detail:
      'A stable connection, working audio, and a quiet environment make remote sessions easier to follow. Tell participants how to join and who will speak before the session begins.',
    visual: 'remote',
    symbol: '↗',
  },
]

function BlogArticle({
  article,
  index,
}: {
  article: (typeof articles)[number]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      className="blog-article"
      id={`article-${index + 1}`}
      variants={itemReveal}
      whileHover={{ y: -3 }}
    >
      <div
        className={`blog-article-image blog-article-image--${article.visual}`}
        aria-hidden="true"
      >
        <span>{article.symbol}</span>
        <i />
      </div>
      <div className="blog-article-content">
        <div className="blog-article-meta">
          <span>{article.category}</span>
          <span>{article.date} <i aria-hidden="true">·</i> {article.readTime}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        {expanded && <p className="blog-article-detail">{article.detail}</p>}
        <button
          className="blog-read-more"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : 'Read more'}
          <span aria-hidden="true">{expanded ? '−' : '→'}</span>
        </button>
      </div>
    </motion.article>
  )
}

export function BlogPage() {
  return (
    <motion.main className="page content-page blog-page" {...pageEntrance}>
      <motion.header
        className="blog-banner"
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <span className="eyebrow">The Global journal</span>
        <h1>Discover language insights</h1>
        <p>
          Ideas, guidance, and practical perspectives on translation,
          interpreting, and connecting across cultures.
        </p>
      </motion.header>

      <motion.nav
        className="blog-featured"
        aria-label="Featured articles"
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {articles.slice(0, 3).map((article, index) => (
          <motion.a
            className={`blog-featured-image blog-featured-image--${article.visual}`}
            href={`#article-${index + 1}`}
            key={article.title}
            aria-label={`Jump to ${article.title}`}
            variants={itemReveal}
            whileHover={{ y: -3, scale: 1.015 }}
          >
            <span>{article.symbol}</span>
            <strong>{article.category}</strong>
          </motion.a>
        ))}
      </motion.nav>

      <div className="blog-section-heading">
        <div>
          <span className="eyebrow">From our journal</span>
          <h2>Stories and ideas worth sharing.</h2>
        </div>
        <span className="blog-article-count">6 articles</span>
      </div>

      <motion.section
        className="blog-article-grid"
        aria-label="Blog articles"
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {articles.map((article, index) => (
          <BlogArticle article={article} index={index} key={article.title} />
        ))}
      </motion.section>
    </motion.main>
  )
}
