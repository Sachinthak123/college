import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import BgBlackNav from "../components/BgBlackNav";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .send(
        "service_ywc2eds",
        "template_tiwyoce",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        "VT04kLFni4RpnoVbo"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          alert("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });

          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error);
          console.error("EMAILJS ERROR:", error);

          alert("Something went wrong. Please try again.");

          setIsSending(false);
        }
      );
  };

  return (
    <>
      <BgBlackNav />

      <section className="py-30">

        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Get in Touch
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Have a question or want to know more about our programs?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Contact Box */}
        <div className="min-h-screen flex items-center justify-center px-4 py-10">

          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

            {/* Left Side */}
            <div className="bg-slate-900 text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center">

              <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                Contact Us
              </h1>

              <p className="text-slate-300 leading-7">
                We are here to help you with admissions, courses,
                programs, and other academic queries. Feel free to
                get in touch with us.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>

                  <div>
                    <p className="text-sm text-slate-400">
                      Email
                    </p>

                    <p className="break-all">
                      sachitnthak51@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📱</span>

                  <div>
                    <p className="text-sm text-slate-400">
                      Phone
                    </p>

                    <p>
                      8806977066
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>

                  <div>
                    <p className="text-sm text-slate-400">
                      Location
                    </p>

                    <p>
                      Pune, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="p-6 sm:p-8 md:p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold transition duration-300"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;