import { ContactForm } from 'organisms/index'
import React from 'react'

export default function ContactUs() {
  return (
    <section className="contact-us-wrapper">
      <div className="w-container  w-full  grid grid-cols-1 lg:grid-cols-2">
        <div>Get in touch</div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
