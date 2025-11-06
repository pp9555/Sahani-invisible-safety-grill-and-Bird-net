// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqagrywq");
  if (state.succeeded) {
      return <p className="py-16 px-6 md:px-20 bg-gray-100 text-center">Thanks for joining!</p>;
  }
  return (
   <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
           Have questions or want to get a free quote? Fill out the form below —
      our team will reach out shortly.
        </p>
        {/* <form
          className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form> */}
         <form
    //   action="https://formspree.io/f/indiepranshu@gmail.com" // 👈 replace with your Formspree endpoint
    //   method="POST"
    onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-8 space-y-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full"
      >
        Send Message
      </button>
    </form>
      </section>
  );
}

export default ContactForm;