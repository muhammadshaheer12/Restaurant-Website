import Image from "next/image";

export default function Slider() {
  return (
    <div className="relative">
      {/* Header Section */}
      <header className="z-10 relative">
        <h1 className="text-4xl font-bold text-black pt-20 text-center">
          {/* Restaurant Header */}
        </h1>
      </header>

      {/* Image with overlay */}
      <Image
        className="w-full h-[700px] object-cover"
        alt="slide_img"
        src="/img/slider.jpg" // Ensure this image is high-resolution
        layout="intrinsic" // Adjusts the image size to fit without distortion
        width={1920} // Specify the width
        height={700} // Specify the height
      />

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <h1 className="font-bold text-7xl text-black pb-12">
          Welcome to Our Restaurant
        </h1>
        <p className="text-xl mt-2 text-4xl text-black">
          Experience the best of culinary delights!
        </p>
      </div>
    </div>
  );
}
