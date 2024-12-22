import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* About Section Start */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7 pt-[280px] p-10">
        <div>
          <Image
            className="w-full h-full rounded-tr-full" // Use full width and height instead of hardcoding values for responsiveness
            alt="image"
            src="/img/img_11.jpg" // Correct image reference from the 'public' directory
            width={500} // Specify width for optimization
            height={300} // Specify height for optimization
          />
        </div>

        <div>
          <h1 className="font-bold font-serif text-yellow-500 text-3xl p-4">
            Experience a perfect blend of flavor and ambiance.
          </h1>
          <h2 className="font-bold font-serif text-black text-xl pt-4 p-3">
            Crafting a space where memories are made over delicious meals.
          </h2>
          <p className="font-serif text-md p-3 text-justify text-black">
            At our restaurant, we focus on creating a delightful dining
            experience that tantalizes your taste buds. Our menu features an
            exquisite mix of traditional and contemporary dishes, prepared with
            fresh ingredients and served in a cozy, inviting atmosphere. Whether
            you are here for a casual meal or a special celebration, we offer a
            diverse selection of dishes that will cater to every preference.
            Come for the food, stay for the memories!
          </p>
          <br />
          <Link
            href="/about_us"
            className="text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-yellow-500 rounded-xl ml-2"
          >
            Discover More
          </Link>
        </div>
      </div>
      {/* About Section End */}
    </div>
  );
}
