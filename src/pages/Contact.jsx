import React from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We value your feedback and inquiries. Please use the form below to get in touch with us.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <Input type="text" id="name" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <Input type="email" id="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <Textarea id="message" placeholder="Your Message" rows={5} />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;