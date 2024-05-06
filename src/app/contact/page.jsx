import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="relative z-0 transition-all group focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="block w-full px-6 pt-12 pb-4 transition bg-transparent border peer border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Ask us anything!
        </h2>
        <div className="mt-6 -space-y-px isolate rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
         
          
          <TextInput label="Your Telegram @" />
          <TextInput label="Message" name="message" />
         
        </div>
        <Button type="submit" className="mt-10">
          Send
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      
      
      <h2 className="text-base font-semibold font-display text-neutral-950">
          Contact us on Social Media
        </h2>
      <Offices className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2" />

      <Border className="pt-16 mt-16">
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Email us
        </h2>
        <dl className="grid grid-cols-1 gap-8 mt-6 text-sm sm:grid-cols-2">
          {[
            ['Support', 'support@emeraldbetz.com'],
           
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="pt-16 mt-16">
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Ask us anything!">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
