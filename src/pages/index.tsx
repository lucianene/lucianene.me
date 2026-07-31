import Image from "next/image";
import DefaultLayout from "@/layouts/default.layout";
import { ReactElement, useEffect, useRef, useState } from "react"

type SkillItem = {
  label: string
  icon: string
}

type FlagshipProject = {
  title: string
  metric: string
  metricLabel: string
  subtitle?: string
  link?: string
  linkLabel?: string
  bullets: string[]
  tech: string[]
}

type CompactProject = {
  title: string
  note?: string
  link?: string
}

const EMAIL_B64 = "ZW5lLmx1Y2lhbkBvdXRsb29rLmNvbQ=="
const AVATAR_SRC = "https://avatars.githubusercontent.com/u/24269157?v=4"

function decodeEmail() {
  if (typeof window === "undefined") return ""
  return window.atob(EMAIL_B64)
}

export default function HomePage() {
  const [emailVisible, setEmailVisible] = useState(false)
  const [emailAddress, setEmailAddress] = useState("")
  const [copied, setCopied] = useState(false)
  const [avatarOpen, setAvatarOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  const skills: SkillItem[] = [
    { label: 'PHP', icon: 'devicon-php-plain' },
    { label: 'Laravel', icon: 'devicon-laravel-plain' },
    { label: 'Symfony', icon: 'devicon-symfony-plain' },
    { label: 'Python (web & backend)', icon: 'devicon-python-plain' },
    { label: 'TypeScript', icon: 'devicon-typescript-plain' },
    { label: 'Vue.js', icon: 'devicon-vuejs-plain' },
    { label: 'React / Next.js', icon: 'devicon-react-plain' },
    { label: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
    { label: 'Docker', icon: 'devicon-docker-plain' },
    { label: 'Architecture', icon: 'devicon-graphql-plain' },
    { label: 'AI', icon: 'devicon-tensorflow-original' },
  ]

  const tools: SkillItem[] = [
    { label: 'Linux', icon: 'devicon-linux-plain' },
    { label: 'GitHub', icon: 'devicon-github-original' },
    { label: 'Docker Compose', icon: 'devicon-docker-plain' },
    { label: 'Jenkins', icon: 'devicon-jenkins-plain' },
    { label: 'Auth0', icon: 'devicon-oauth-plain' },
    { label: 'Swagger', icon: 'devicon-swagger-plain' },
  ]

  const training: string[] = [
    '365 lessons completed at Laracasts',
    'PHP Unit Testing with PHPUnit — Udemy',
    'The Complete Sass & SCSS Course — Udemy',
    'AWS Concepts — Udemy',
    'Getting Started with PHP 7 — Udemy',
    'Object Oriented Programming (OOP) in PHP — Udemy',
    'Learn and Understand NodeJS — Udemy',
    'Advanced Javascript — Udemy',
    'Learn Symfony 3 framework by practical examples — Udemy',
    'PHP Security — Udemy',
    'Programming Basics — Crystal Mind Academy',
    'Web Designer — Crystal Mind Academy',
  ]

  const flagships: FlagshipProject[] = [
    {
      title: 'Healthcare API',
      metric: 'Secure REST',
      metricLabel: 'Laravel · Swagger · RBAC',
      subtitle: 'Freelance Contractor · May 2024',
      bullets: [
        'Led design and delivery of a scalable Laravel REST API for healthcare integrations.',
        'Advanced validation, pagination, token auth, RBAC, and full Swagger documentation.',
      ],
      tech: ['Laravel', 'REST API', 'Swagger', 'PHP'],
    },
    {
      title: 'MindGeek — Backoffice & Payments',
      metric: '30 min → <5',
      metricLabel: 'report generation',
      subtitle: 'Performance & real-time payments',
      bullets: [
        'Redesigned a critical reporting query used in business-critical dashboards.',
        'Built tools for real-time payment transaction data under high load.',
      ],
      tech: ['PHP', 'SQL', 'Performance', 'Payments'],
    },
    {
      title: 'Ford Dealership Car Configurator',
      metric: 'Hours → minutes',
      metricLabel: 'offer generation · team of 5',
      subtitle: 'Bucharest · Team lead',
      bullets: [
        'Led a wizard-style configurator and backoffice for a major Romanian Ford dealership.',
        'API-driven vehicle data, PDF offer packages, AWS + Docker delivery.',
      ],
      tech: ['Laravel', 'Vue.js', 'Docker', 'AWS'],
    },
    {
      title: 'Multi-Tenant Auth — Entrili',
      metric: '5+ tenants',
      metricLabel: 'OAuth · SAML · classic login',
      subtitle: 'Belgium · SaaS platform',
      bullets: [
        'Tenant-aware authentication built on deep Symfony security customization.',
        'Integrated Vue.js flows; Docker on AWS for local and production.',
      ],
      tech: ['Symfony', 'Vue.js', 'Docker', 'AWS'],
    },
    {
      title: 'OpenTalent — Platform & Tooling',
      metric: 'Minutes, not hours',
      metricLabel: 'local env bootstrap · multi-OS',
      subtitle: 'Engineering Lead · Staff Engineer',
      link: 'https://www.opentalent.co/',
      linkLabel: 'opentalent.co',
      bullets: [
        'Built Python and Bash scripts plus Docker Compose so the team could spin up macOS, Linux, and Windows environments quickly.',
        'Shipped AI resume analysis for hiring, with safeguards against prompt injection; also led Laravel API, React, and AWS delivery.',
      ],
      tech: ['Python', 'Bash', 'Docker', 'Laravel', 'React', 'AWS', 'AI'],
    },
    {
      title: 'Fastcss',
      metric: 'Open source',
      metricLabel: 'config-driven CSS framework',
      subtitle: 'Author & maintainer',
      link: 'https://fastcss.org',
      linkLabel: 'fastcss.org',
      bullets: [
        'SASS utility framework generating responsive color, type, spacing, flex, and grid helpers.',
      ],
      tech: ['SASS', 'CSS', 'Open Source'],
    },
  ]

  const compactProjects: CompactProject[] = [
    { title: 'Casautil Ecommerce', link: 'https://casautil.ro', note: 'Laravel + Fastcss' },
    { title: 'eMAG UI KIT & UI BUNDLE', note: 'Symfony + Vue design system' },
    { title: 'Symfony platform upgrades', note: '3.4 → 5.4 / PHP 8' },
    { title: 'Jobs platform', note: 'One of the largest in Romania' },
    { title: 'Casino backoffice', note: 'Operations tooling' },
    { title: 'Inkydeals Ecommerce', link: 'https://inkydeals.com', note: 'inkydeals.com' },
    { title: 'ARCoR', link: 'https://arcor.clubofrome.ro', note: 'arcor.clubofrome.ro' },
    { title: 'Image search engine', note: 'Laravel 5' },
  ]

  useEffect(() => {
    const root = projectsRef.current
    if (!root) return
    const items = root.querySelectorAll('.project-flag')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      items.forEach((el) => el.classList.add('is-inview'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!avatarOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAvatarOpen(false)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [avatarOpen])

  const revealEmail = async () => {
    const address = decodeEmail()
    setEmailAddress(address)
    setEmailVisible(true)
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard may be unavailable; still reveal
    }
  }

  return (
    <main>
      <section id="about" className="hero mb-50">
        <div className="hero-enter">
          <button
            type="button"
            className="avatar-trigger mb-20"
            onClick={() => setAvatarOpen(true)}
            aria-label="View larger photo"
          >
            <Image
              className="block rad-50% w-128"
              width={128}
              height={128}
              src={AVATAR_SRC}
              alt="Lucian Ene"
              title="Lucian Ene"
            />
          </button>
          <h1 className="hero__name">Lucian Ene</h1>
          <p className="hero__role">Engineering Lead · Staff Engineer · Full Stack</p>
          <p className="hero__lede">
            Based in Bucharest. I lead teams and ship durable systems across APIs, cloud infrastructure, and product delivery — with over 10 years in the stack.
          </p>
          <div className="hero__fastcss">
            <a className="hero__fastcss-label no-decoration" href="https://fastcss.org" target="_blank" rel="noreferrer">
              Author of Fastcss
            </a>
            <span className="hero__fastcss-demo">blue-text · flex · gap-12 · rad-3</span>
          </div>
          <div className="hero__ctas">
            <a
              className="btn btn--primary"
              href="https://www.linkedin.com/in/lucianene"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/lucianene"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {!emailVisible ? (
              <button type="button" onClick={revealEmail} className="btn btn--ghost">
                Show email
              </button>
            ) : (
              <div className="flex items-center gap-8 fs-sm">
                <span className="white-text">{emailAddress}</span>
                {copied ? (
                  <span className="green-text">Copied</span>
                ) : (
                  <button type="button" onClick={revealEmail} className="btn btn--ghost">
                    Copy
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {avatarOpen && (
        <div
          className="avatar-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo"
          onClick={() => setAvatarOpen(false)}
        >
          <button
            type="button"
            className="avatar-modal__close"
            onClick={() => setAvatarOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="avatar-modal__content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={AVATAR_SRC}
              alt="Lucian Ene"
              width={420}
              height={420}
              className="avatar-modal__image"
              priority
            />
          </div>
        </div>
      )}

      <section id="skills" className="mb-80">
        <h2 className="section-title">Skills</h2>

        <div className="mt-30">
          <h3 className="mb-15 fs-lg grey-text:200">Software Development</h3>
          <div className="flex flex-wrap gap-12">
            {skills.map((item) =>
              <div key={item.label} className="skill-chip">
                <i className={`${item.icon} fs-lg`} />
                <span>{item.label}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-30">
          <h3 className="mb-15 fs-lg grey-text:200">Tools</h3>
          <div className="flex flex-wrap gap-12">
            {tools.map((item) =>
              <div key={item.label} className="skill-chip">
                <i className={`${item.icon} fs-lg`} />
                <span>{item.label}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-30">
          <h3 className="mb-15 fs-lg grey-text:200">Professional Training</h3>
          <p className="fs-sm grey-text:200 mb-15" style={{ maxWidth: '40rem', lineHeight: 1.55 }}>
            Through these courses I built a strong foundation in PHP and OOP, then went deeper into testing with PHPUnit, application security, and the Symfony ecosystem. I strengthened frontend and full-stack craft with JavaScript, React, Vue, Python, Sass, and Node.js, picked up AWS fundamentals for cloud delivery, and keep sharpening day-to-day Laravel and modern PHP practice through Laracasts.
          </p>
          <ul className="fs-sm pl-20 grey-text:200">
            {training.map((item) =>
              <li key={item} className="pb-5">{item}</li>
            )}
          </ul>
        </div>
      </section>

      <section id="projects" className="mb-50">
        <h2 className="section-title">Projects</h2>
        <div className="mt-30" ref={projectsRef}>
          {flagships.map((project) =>
            <article key={project.title} className="project-flag">
              <div className="project-flag__metric">
                {project.metric}
                <span className="project-flag__metric-label">{project.metricLabel}</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-8">
                <h3 className="project-flag__title">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="fs-sm">
                    {project.linkLabel ?? project.link}
                  </a>
                )}
              </div>
              {project.subtitle && (
                <div className="mt-5 fs-sm grey-text:400">{project.subtitle}</div>
              )}
              <div className="project-flag__body">
                <ul className="fs-sm pl-20 m-0">
                  {project.bullets.map((bullet) =>
                    <li key={bullet} className="pb-5 grey-text:200">{bullet}</li>
                  )}
                </ul>
                <div className="mt-10 flex flex-wrap gap-8">
                  {project.tech.map((tag) =>
                    <span key={tag} className="fs-xs ph-10 pv-2 rad-3 blue-fill:900 white-text">
                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </article>
          )}
        </div>

        <div className="mt-30 pt-20 bt-1 grey-border:900">
          <h3 className="mb-15 fs-lg grey-text:200">Also shipped</h3>
          <ul className="also-shipped">
            {compactProjects.map((project) =>
              <li key={project.title}>
                <span className="also-shipped__title">{project.title}</span>
                {project.link ? (
                  <a className="also-shipped__note" href={project.link} target="_blank" rel="noreferrer">
                    {project.note ?? project.link}
                  </a>
                ) : (
                  project.note && <span className="also-shipped__note">{project.note}</span>
                )}
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
}
