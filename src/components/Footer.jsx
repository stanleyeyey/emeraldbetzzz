import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Follow us',
    links: [
      { title: 'Telegram', href: 'https://t.me/emerald_betz' },
      { title: 'Instagram', href: 'https://www.instagram.com/emeraldbetz/' },
      { title: 'X', href: 'https://twitter.com/emerald_betz' },

    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: 'privacy-policy' },
      { title: 'Terms of Use', href: '/terms-of-use' },
      
    ]
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="text-sm font-semibold tracking-wider font-display text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="text-sm font-semibold tracking-wider font-display text-neutral-950">
        Sign up for our newsletter in Telegram
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
      Subscribe now to stay updated with the latest giveaways, gain valuable insights, and unlock exclusive offers.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Your Telegram @"
          aria-label="Email address"
          className="block w-full py-4 pl-6 pr-20 transition bg-transparent border rounded-2xl border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute flex justify-end inset-y-1 right-1">
          <button
            type="submit"
            aria-label="Submit"
            className="flex items-center justify-center h-full text-white transition aspect-square rounded-xl bg-[#00EA08] hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="w-full mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between pt-12 mt-24 mb-20 border-t gap-x-6 gap-y-4 border-neutral-950/10">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
          © 2024 EmeraldBetz, inc. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
