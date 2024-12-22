"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function OurChefs() {
  return (
    <div>
      {/* Title Section */}
      <h1 className="font-bold font-serif text-yellow-500 text-4xl ml-3 text-center pb-7 pt-[260px]">
        <Typewriter
          options={{
            strings: ["Meet Our Expert Culinary Team"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      {/* Chef Section Start */}
      <div className="sm:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
        {/* Chef 1 Section */}
        <div className="overflow-hidden rounded-lg border border-2 mb-3 text-center shadow-2xl bg-black text-white">
          <Image
            className="w-full h-auto hover:scale-125"
            alt="Chef Isabella Thompson preparing a dish"
            src="/img/img_15.jpg"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-yellow-500 text-xl text-center pt-20">
            Chef Isabella Thompson
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Chef Isabella Thompson is a culinary innovator, renowned for her
            creative fusion of global flavors. With over 15 years of experience
            in world-class kitchens, Isabella brings a unique approach to fine
            dining. Her signature dishes blend traditional techniques with
            modern twists, creating unforgettable experiences for guests. Known
            for her commitment to sustainability, Chef Isabella also champions
            farm-to-table dining, supporting local producers and promoting
            organic ingredients.
          </p>
        </div>
        {/* Chef 1 Section End */}

        {/* Chef 2 Section */}
        <div className="overflow-hidden rounded-lg border border-2 mb-3 text-center shadow-2xl bg-black text-white">
          <Image
            className="w-full h-auto hover:scale-125"
            alt="Chef Daniel Reyes presenting a dish"
            src="/img/img_08.jpg"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-yellow-500 text-xl text-center pt-20">
            Chef Daniel Reyes
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Chef Daniel Reyes is an expert in modern gastronomy, known for his
            mastery in molecular cuisine. With a career spanning prestigious
            Michelin-starred restaurants, Chef Daniel has pushed the boundaries
            of culinary art, combining science and flavor to create avant-garde
            dishes. His work is centered on enhancing the sensory experience,
            using cutting-edge techniques to surprise and delight diners with
            each bite. Daniel&apos;s passion for culinary innovation has earned him
            numerous accolades in the industry.
          </p>
        </div>
        {/* Chef 2 Section End */}

        {/* Chef 3 Section */}
        <div className="overflow-hidden rounded-lg border border-2 mb-3 text-center shadow-2xl bg-black text-white">
          <Image
            className="w-full h-auto hover:scale-125"
            alt="Chef Rick Stein showcasing a dessert"
            src="/img/img_09.jpg"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-yellow-500 text-xl text-center pt-20">
            Chef Rick Stein
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Chef Rick Stein is an award-winning chef renowned for his exceptional pastry creations. Specializing in desserts, Rick has spent years perfecting his craft, blending classic techniques with innovative design. He is celebrated for his intricate, artistic confections and has gained international recognition for his work in top-tier patisseries. Rick believes in creating desserts that are not only delicious but also visually stunning, making each dessert a work of art.
          </p>
        </div>
        {/* Chef 3 Section End */}
      </div>
      {/* Chef Section End */}
    </div>
  );
}
