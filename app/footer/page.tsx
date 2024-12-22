import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      {/* Footer Section Start */}
      <footer className="body-font bg-black text-yellow-500">
        <div className="container px-4 pt-40 pb-2 flex mx-auto items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow-500">
            <Image
              className="w-[90px]"
              alt="footer_logo"
              src="/img/logo.jpg" // Corrected image path for 'public' directory
              width={90} // Added width for optimization
              height={90} // Added height for optimization
            />
          </a>
          <p className="text-sm text-yellow-500 font-serif sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-yellow-500 sm:py-2 sm:mt-0 mt-4">
            © 2024
            <a
              href="#"
              className="text-yellow-500 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              All rights reserved.
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href = "https://www.linkedin.com/in/muhammad-shaheer12/" target="blank"  className="ml-3 text-white px-2 py-2 bg-orange-600 hover:bg-black hover:text-white rounded-full">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  );
}
