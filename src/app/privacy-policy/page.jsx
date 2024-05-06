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
      <PageIntro eyebrow="Legal" title="PRIVACY POLICY">
        

        <p className="text-base mt-8 font-bold text-[#00C81F]">PRIVACY POLICY</p>
       
        <p className="text-base mt-8 font-bold text-[#00C81F]">1. Introduction</p>
        <p className="text-base ">This privacy policy (“Policy”) describes how we collect, use, and share personal information about you when you access or use our website (the “Site”). This Policy also applies to any other websites that post this Policy. By using our Site, you consent to the collection, use, and sharing of your personal information as described in this Policy. If you do not agree with this Policy, please do not use our Site. We reserve the right to change this Policy at any time, and if we make changes, we will update the date of the Policy listed above and notify you by posting notice of such changes on our Site. Your continued use of our Site after we make changes is deemed to be acceptance of those changes, so please check the Policy periodically for updates.</p>
        
        <p className="text-base mt-8 font-bold text-[#00C81F]">2. Information We Collect</p>
        <p className="text-base ">We collect various types of information about visitors to our Site. Some of this information is personally identifiable, while other information is anonymous or aggregated and does not identify a specific individual.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">3. Personally Identifiable Information</p>
        <p className="text-base ">You may choose to provide us with certain personal information, such as your name, email address, phone number, and mailing address, through forms on our Site. We may also obtain information about you from third parties, including social media platforms, marketing partners, and publicly available sources. We use this information to respond to your requests, fulfill orders, and improve our Site and services.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">2. Information We Collect</p>
        <p className="text-base ">We collect various types of information about visitors to our Site. Some of this information is personally identifiable, while other information is anonymous or aggregated and does not identify a specific individual.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">4. Anonymous or Aggregate Information</p>
        <p className="text-base ">When you visit our Site, we automatically log certain information about your computer and your visit, including your IP address, browser type, referring URL, and the pages you visit. We use this information to help us understand how visitors use our Site, diagnose problems with our server, and administer our Site. We may also aggregate this information and use it to analyze trends, gather demographic information about our user base, and generate reports regarding the usage of our Site.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">5. Cookies and Similar Technologies</p>
        <p className="text-base ">Like many websites, we use cookies and similar technologies to collect information about how you use our Site. Cookies are small data files that are stored on your device and used to remember your preferences, track your activity on our Site, and improve your experience. You can control the use of cookies on our Site through your web browser’s settings. However, please note that disabling cookies may interfere with the functionality of some parts of our Site.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">6. Sharing of Personal Information</p>
        <p className="text-base ">We may share personal information about you with service providers who perform functions on our behalf, such as hosting our Site, providing customer service, processing payments, or analyzing data. These service providers are required to maintain the confidentiality of the personal information we provide them and to use it only to perform the functions we specify. We may also share personal information with law enforcement or other third parties when necessary to comply with legal processes or to protect our rights and interests. Finally, we may buy or sell assets or businesses, and in these transactions, we may transfer personal information about our customers to the purchaser.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">7. International Visitors</p>
        <p className="text-base ">Our Site is hosted in the United States and is intended for users located in the United States. If you are accessing our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. The data protection laws in the United States may differ from those in your country, but we will still process your information in accordance with this Policy. By using our Site, you acknowledge that your personal information may be transferred to the United States and you expressly consent to such transfer.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">8. Security</p>
        <p className="text-base ">We take reasonable measures to protect the security of your personal information. We use industry-standard encryption technology to ensure that your personal information is transmitted securely between your device and our servers. Unfortunately, no data transmission over the internet can be guaranteed to be 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">9. Access to Personal Information</p>
        <p className="text-base ">If you would like to review, correct, or delete personal information that you have provided to us, please contact us. Please note that we may retain certain information as required by law or regulation.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">10. Children’s Privacy</p>
        <p className="text-base ">Our Site is not directed to individuals under the age of thirteen (13), and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under the age of thirteen without parental consent, we will take steps to delete such information as soon as possible.</p>

        <p className="text-base mt-8 font-bold text-[#00C81F]">12. Contact Us</p>
        <p className="text-base ">If you have any questions or concerns about this Policy or our practices, please contact us.</p>
        

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