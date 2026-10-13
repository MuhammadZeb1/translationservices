import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
]

function Brand({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="Global Translation Services home"
      onClick={onNavigate}
    >
      <img
        className="brand-logo"
        src="/global-translation-logo.svg"
        alt="Global Translation Services"
      />
    </Link>
  )
}

function NavigationLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="navigation-links">
      {navigation.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navigation-link navigation-link--active' : 'navigation-link'
          }
          end={item.to === '/'}
          to={item.to}
          key={item.label}
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

function MenuToggle({
  isOpen,
  onToggle,
}: {
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <button
      className="menu-toggle"
      type="button"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className="site-header"
      id="home"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="navbar">
        <Brand onNavigate={closeMenu} />
        <MenuToggle
          isOpen={menuOpen}
          onToggle={() => setMenuOpen(!menuOpen)}
        />
        <motion.nav
          className={`navigation${menuOpen ? ' navigation--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
          initial={false}
          animate={menuOpen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <NavigationLinks onNavigate={closeMenu} />
          <Link className="order-button" to="/contact" onClick={closeMenu}>
            Order translation
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Navbar
