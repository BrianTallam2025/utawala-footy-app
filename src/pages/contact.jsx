import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending a message (in a real app, you'd send this data to your backend)
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network request

    setIsSubmitting(false);
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear the form after successful submission
    setSubject('');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'subject':
        setSubject(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <ToastContainer />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Whether you have questions about registration, academy programs, or anything else, feel free to send us a message.
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Location:</h3>
            <p className="text-gray-600">Utawala, Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information:</h3>
            <p className="text-gray-600">Email: <a href="mailto:tallambrian633@gmail.com" className="text-blue-500 hover:underline">tallambrian633@gmail.com</a></p>
            <p className="text-gray-600">Phone: +254 705481942</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Subject of your message"
                value={subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;