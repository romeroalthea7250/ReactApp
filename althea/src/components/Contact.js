import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert("Error: " + error.message));
  }

  return (
    <section id="contact" className="relative bg-gray-50 py-10">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61752.64729260679!2d121.10868568957389!3d14.682001383294805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbd0422404fb%3A0xf369cca31a8be513!2sSan%20Mateo%2C%20Rizal!5e0!3m2!1sen!2sph!4v1731597975446!5m2!1sen!2sph"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="pl-6 pr-3">
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-700">
                San Mateo <br />
                Rizal
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-700 leading-relaxed">
                romero2104158@ceu.edu.ph
              </a>
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-700">+63 997-744-9186</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          {/* Hidden input for Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          <h2 className="text-gray-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            "Feel free to reach out – let's connect!"
          </p>

          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Message Input */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
