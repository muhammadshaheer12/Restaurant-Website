import Image from "next/image";

export default function Testimonial() {
  return (
    <div>
      {/* Testimonial Start */}
      <h1 className="font-bold font-serif text-yellow-500 text-4xl text-center animate-bounce pt-[200px]">
        TESTI<b className="text-black">MONIAL</b>
      </h1>
      <div className="bg-black mt-[30px] w-full py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="shadow-2xl p-6 bg-yellow-500">
            <Image
              alt="Chef John Doe portrait"
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200"
              src="/img/testimonial_chef.jpg" // Use the path from public directory
              width={100} // Define the width of the image
              height={100} // Define the height of the image
            />
            <p className="font-serif p-3 text-justify text-black leading-relaxed">
              JOHN DOE is a famous chef known for his innovative approach to
              traditional dishes. He has opened several award-winning
              restaurants and is known for using local ingredients in creative
              and sustainable ways. He is especially celebrated for his ability
              to transform simple meals into extraordinary experiences through
              his dedication to culinary perfection. With his expertise in
              combining bold flavors, he has earned a reputation as one of the
              most respected chefs in the culinary world. When he&apos;s not in the
              kitchen, John is committed to teaching young chefs and mentoring
              future culinary stars.
            </p>
            <hr className="w-10 h-1 mx-auto bg-black mt-6 mb-4" />
            <h2 className="font-bold font-serif text-black text-xl pt-4 p-3">
              JOHN DOE
            </h2>
            <p className="font-serif p-3 text-center text-black">Head Chef</p>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}
