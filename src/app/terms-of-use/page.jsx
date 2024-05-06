import { useId } from 'react'
import { Metadata } from 'next';
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  ...props
}) {
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



function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
     

      

      

      <Border className="pt-16 mt-16">
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}



export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="TERMS OF USE">
        

        <p className="text-base mt-8 font-bold text-[#00C81F]">TERMS OF USE</p>
       
        <p className="text-base mt-8 font-bold text-[#00C81F]">1. Introduction</p>
        <p className="text-base ">These terms and conditions (“Terms”) govern your use of our sports gambling signals service (the “Service”). By using the Service, you agree to these Terms. If you do not agree with any part of these Terms, you must not use the Service.</p>
        
        <p className="text-base mt-8 font-bold text-[#00C81F]">2. Eligibility</p>
        <p className="text-base ">To be eligible to use the Service, you must be at least 18 years old or the legal age of majority in your jurisdiction, whichever is greater. You also represent and warrant that you are legally permitted to use the Service in your jurisdiction.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">3. Subscription</p>
        <p className="text-base ">The Service is provided on a recurring subscription basis. Your subscription will automatically renew unless you cancel it before the end of the current subscription period. You can manage your subscriptions and turn off auto-renewal by going to your account settings on the applicable app store or website.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">4. Payment</p>
        <p className="text-base ">You authorize us to charge your payment method (e.g., credit card, debit card, or other payment method) for the subscription fee upon sign up and each time the subscription renews. We reserve the right to change the subscription fee at any time.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">5. Refunds</p>
        <p className="text-base ">We do not offer refunds for any charges already paid or unused portions of a subscription period. However, if we materially change these Terms or the Service in a manner that adversely affects your rights, you may cancel your subscription within 30 days after the effective date of such changes and receive a pro rata refund for the unused portion of your subscription period.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">6. Disclaimer of Warranties</p>
        <p className="text-base ">The Service is provided “as is” without warranty of any kind, either express or implied. We do not guarantee or promise any particular results from using the Service. You understand and acknowledge that there is always some risk involved when betting on sports events.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">7. Limitation of Liability</p>
        <p className="text-base ">In no event shall we be liable for any indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with your use of the Service. This includes any loss of profits, goodwill, or any other intangible losses. Our total liability to you for all claims made in connection with the Service shall not exceed the amount of fees paid by you for the Service during the six months preceding the claim.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">8. Indemnification</p>
        <p className="text-base ">You agree to defend, indemnify, and hold harmless us and our affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms or your use of the Service.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">9. Termination</p>
        <p className="text-base ">Either party may terminate these Terms and your access to the Service at any time, with or without cause, by giving notice to the other party. Upon termination, your right to use the Service will immediately cease.</p>

        
      </PageIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}