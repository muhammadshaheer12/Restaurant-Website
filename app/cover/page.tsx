"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

export default function Cover() {
  return (
    <div>
      {/* Cover Section Start */}
      <h1 className="font-bold font-serif text-yellow-500 text-4xl ml-3 text-center pt-[200px]">
        <Typewriter
          options={{
            strings: ["Every Mouthful Bursts with Flavor"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <section className="body-font bg-black">
        <div className="container mx-auto flex px-4 py-10 md:flex-row flex-col items-center mt-[30px]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="font-serif text-3xl mb-4 text-white pt-10 md:pt-20">
              The Finest Yet Costly
            </h2>

            <h1 className="font-serif text-4xl font-bold mb-4 text-yellow-500">
              Mouth Brimming with Flavor
            </h1>
            <p className="mb-8 leading-relaxed font-serif text-white">
              Our establishment boasts tempting flavors, encouraging visitors to
              explore a diverse menu filled with sizzling delights. From gourmet
              meals to beloved local favorites, we offer outstanding culinary
              experiences that will keep you coming back for more. Whether
              you&apos;re in the mood for a small snack or a hearty meal, this is
              the ideal spot for enjoyable dining experiences.
            </p>

            <Link
              href="/menu"
              className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-yellow-500 rounded font-bold font-serif"
              aria-label="Order from our menu"
            >
              Order Now
            </Link>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="w-full h-auto rounded-tl-full" // Maintain aspect ratio
              alt="A delicious gourmet dish served on a plate"
              src="/img/img_12.jpg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* Cover Section End */}
    </div>
  );
}
