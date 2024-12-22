import Image from "next/image";

export default function Menu() {
  return (
    <div>
      {/* Menu Section Start */}
      <h1 className="font-bold font-serif text-orange-600 text-6xl ml-3 pb-7 text-center pt-[270px]">
        Me<b className="text-black">nu</b>
      </h1>
      <div className="sm:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-7 m-4">
        {/* Menu_01 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Pork Sandwich"
            src="/img/menu_01.png"
            width={500} // Set image width for optimization
            height={300} // Set image height for optimization
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Pork <b className="text-black">Sandwich</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
            A Pork Sandwich is a satisfying treat consisting of succulent,
            slow-cooked pork stacked generously between two pieces of crusty
            bread. Topped with zesty sauces and fresh ingredients, this sandwich
            provides an ideal blend of flavors and textures that will fulfill
            any appetite.
          </p>
        </div>
        {/* Menu_01 End */}

        {/* Menu_02 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Easter Delight"
            src="/img/menu_02.png"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Easter <b className="text-black">Delight</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Easter Delight is a joyful dessert that combines a variety of
            flavors, showcasing layers of decadent chocolate.This indulgent treat captures the essence
            of Easter festivities, establishing it as an ideal focal point for
            any celebratory occasion.
          </p>
        </div>
        {/* Menu_02 End */}

        {/* Menu_03 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Smoke Bbq"
            src="/img/menu_03.png"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Smoke <b className="text-black">Bbq</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
          BBQ seekh kebab is a mouthwatering dish where the smoky char of the grill elevates the tender, juicy meat, infusing it with a rich, savory flavor. As the kebabs cook to perfection, the marbled fat melts, creating a luscious, caramelized crust. Served alongside warm, crusty bread and a sprinkle of fresh herbs, it offers a hearty, satisfying BBQ experience that’s both indulgent and delicious.
          </p>
        </div>
        {/* Menu_03 End */}

        {/* Menu_04 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Special Chops Chicken"
            src="/img/menu_04.png"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Special <b className="text-black">Chops Chicken</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Special Chops Chicken showcases succulent, marinated chicken pieces
            that are grilled flawlessly, overflowing with deep flavors and
            fragrant spices. Accompanied by a tangy sauce, this meal provides a
            wonderful harmony of taste and texture, making it a must-try for
            chicken lovers.
          </p>
        </div>
        {/* Menu_04 End */}

        {/* Menu_05 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Veg Combo Sizzles"
            src="/img/menu_05.png"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Veg <b className="text-black">Combo Sizzles</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
            The Veg Combo features a lively assortment of seasonal vegetables,
            skillfully cooked to emphasize their inherent flavors. This colorful
            medley is served with a variety of dips and sauces, offering a
            deliciously satisfying and wholesome experience for veggie
            enthusiasts.
          </p>
        </div>
        {/* Menu_05 End */}

        {/* Menu_06 Start */}
        <div className="overflow-hidden rounded-lg border border-2 mb-4 shadow-xl">
          <Image
            className="w-full hover:scale-125"
            alt="Pakistani Special Burger"
            src="/img/menu_06.png"
            width={500}
            height={300}
          />
          <h1 className="font-bold font-serif text-orange-600 text-xl text-center pt-16">
            Pakistani <b className="text-black">Special Burger</b>
          </h1>
          <p className="font-serif text-md text-justify p-3">
            Pakistani Special Burger is a flavorful fusion of tender, spiced
            meat patty, topped with fresh vegetables and zesty chutneys, all
            nestled in a soft bun. This mouthwatering burger combines
            traditional Pakistani spices with classic burger elements,
            delivering a unique and satisfying taste.
          </p>
        </div>
        {/* Menu_06 End */}
      </div>
      {/* Menu Section End */}
    </div>
  );
}
