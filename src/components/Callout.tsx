import { Link } from 'react-router-dom'

function Callout() {
  return (
    <section className="page-callout">
      <div>
        <span className="eyebrow">Have a project in mind?</span>
        <h2>Let’s find the right words together.</h2>
      </div>
      <Link className="primary-action" to="/contact">
        Get in touch <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}

export default Callout
