import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

import { Button } from '@/components/Button'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
]

function Clients() {
  return (
    <div className="py-20 mt-24 rounded-4xl bg-neutral-950 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-sm font-semibold tracking-wider text-center text-white font-display sm:text-left">
          We bet on a wide range of sports.
          </h2>
          <div className="flex-auto h-px bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="grid grid-cols-2 mt-10 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Why choose us?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        See why 1,000+ members joined us for their sports betting
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex flex-col w-full p-6 transition rounded-3xl ring-1 ring-neutral-950/5 hover:bg-neutral-50 sm:p-8">
                <h3>
                  
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="w-16 h-16"
                      unoptimized
                    />
                  
                </h3>
                <p className="flex mt-6 text-sm gap-x-2 text-neutral-950">
                  
                  
                </p>
                <p className="mt-6 text-2xl font-semibold font-display text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      
      
    </>
  )
}

export const metadata = {
  description:
    'Join us to boost your bankroll with top-tier sports handicappers and a supportive community.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Unlock Your Winning Strategy
          </h1>
          <p className="mt-6 mb-6 text-xl text-neutral-600">
          Join us and let&apos;s grow your money together! We&apos;ve got the best sports experts and a friendly community waiting for you. Learn new strategies, share tips, and watch your bank account grow!
          </p>

          <Button href="https://whop.com/emerald-betz/">
            Join now
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Man, I gotta say, I love this group! Joined about a month ago, didn&apos;t know anything about sports betting. But since being in here I&apos;ve picked up a ton about managing units and playing it safe with my bets. Also made tons of cash! Props to all the smart cappers and helpful people in here.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
