import Link from "next/link";

export default function Contact() {
  return (
    <div>
      {/* Contact Section Start */}
      <h1 className="font-bold font-serif text-yellow-500 text-6xl ml-3 text-center pt-[240px] pb-10">
        Contact <b className="text-black">Us</b>
      </h1>
      <section className="body-font relative">
        <div className="absolute inset-0 bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>

        <div className="container px-5 py-20 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <p className="leading-relaxed mb-5 font-serif text-white">
              We’re eager to hear from you! Whether you have inquiries or need
              assistance, our team is ready to help. Reach out and connect with
              us today.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm font-serif text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 font-serif text-sm text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>

            <Link
              href="/contact_us"
              className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-white text-center hover:text-black rounded ml-2 font-bold font-serif"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </div>
  );
}
