import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* Header Section Start */}
      <header className="w-full">
        <div className="nav-container mx-auto flex flex-wrap px-3 flex-col md:flex-row items-center border-b border-yellow-500 fixed bg-black w-full">
          <Image
            className="w-[90px]"
            alt="logo_img"
            src="/img/logo.jpg" // Corrected path for the image
            width={90} // Set image width for optimization
            height={90} // Set image height for optimization
          />
          <h1 className="text-2xl font-bold font-serif text-yellow-500">Restaurant Website</h1>
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 font-bold font-serif text-white hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="mr-5 font-bold font-serif text-white hover:text-yellow-500"
            >
              Menu
            </Link>
            <Link
              href="/chefs"
              className="mr-5 font-bold font-serif text-white hover:text-yellow-500"
            >
              Chefs
            </Link>
            <Link
              href="/about_us"
              className="mr-5 font-bold font-serif text-white hover:text-yellow-500"
            >
              About
            </Link>
            <Link
              href="/contact_us"
              className="mr-5 font-bold font-serif text-white hover:text-yellow-500"
            >
              Connect Us
            </Link>
          </nav>
          <Link
            href="/contact_us"
            className="inline-flex font-serif items-center bg-yellow-500 mb-3 border-0 py-2 px-3 focus:outline-none hover:bg-black rounded-xl font-bold text-black mt-4 md:mt-0"
          >
            Reserve Your Table
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </header>
      {/* Header Section End */}
    </div>
  );
}
