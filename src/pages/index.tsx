import AccountCard from "@/components/AccountCard";
import Image from "next/image";

export type ShoeProduct = {
  id: number;
  brand: string;
  model: string;
  color: string;
  size: string;
  price: number;
  image: string;
  name: string;
  description?: string;
  itemPrice: {
    currency: "USD";
    value: number;
    label: string;
  };
};

export const ProductData: ShoeProduct[] = [
  {
    id: 1,
    name: "Nike Air Force 1 - White/Black",
    brand: "Nike",
    model: "Air Force 1",
    color: "White/Black",
    size: "10",
    price: 120.99,
    itemPrice: {
      currency: "USD",
      value: 120.99,
      label: "120.99$",
    },
    description:
      "The Nike Air Force 1 is a classic low-top sneaker that features a leather upper and Air-Sole unit in the heel for cushioning and impact protection. It has a clean white base with black accents on the Swoosh, heel tab, and tongue label for a timeless and versatile look. This shoe is perfect for casual wear or adding a touch of street-style to your outfit.",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: 2,
    name: "Adidas Ultra Boost - Black",
    brand: "Adidas",
    model: "Ultra Boost",
    color: "Black",
    size: "9.5",
    price: 180.0,
    itemPrice: {
      currency: "USD",
      value: 180.0,
      label: "180.0$",
    },
    description:
      "The Adidas Ultra Boost is a highly popular running shoe that offers exceptional comfort and performance. With a sleek black design, it features a responsive Boost midsole that provides energy return with every step. The shoe also features a breathable Primeknit upper that molds to the foot for a comfortable and supportive fit. The outsole provides excellent traction, making it perfect for both road and trail running.",
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80",
  },
  {
    id: 3,
    name: "Puma Clyde - Red/White",
    brand: "Puma",
    model: "Clyde",
    color: "Red/White",
    size: "10.5",
    price: 79.99,
    itemPrice: {
      currency: "USD",
      value: 79.99,
      label: "79.99$",
    },
    description:
      "The Puma Clyde is a classic basketball sneaker first released in the 1970s. This red and white colorway features a suede upper and a low-cut design for a vintage look. The rubber outsole provides traction and durability.",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Vans Old Skool - Black/White",
    brand: "Vans",
    model: "Old Skool",
    color: "Black/White",
    size: "11",
    price: 59.99,
    itemPrice: {
      currency: "USD",
      value: 59.99,
      label: "59.99$",
    },
    description:
      "The Vans Old Skool is a classic skate shoe that has become a timeless fashion icon. With a low-top silhouette, sturdy canvas and suede upper, and signature side stripe, the Old Skool offers style and durability in equal measure. The black and white colorway is versatile and goes with almost any outfit, making these shoes a wardrobe staple for skaters and non-skaters alike.",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    name: "Converse Chuck Taylor All Star - Navy Blue",
    brand: "Converse",
    model: "Chuck Taylor All Star",
    color: "Navy Blue",
    size: "8.5",
    price: 49.99,
    itemPrice: {
      currency: "USD",
      value: 49.99,
      label: "49.99$",
    },
    description:
      "The Converse Chuck Taylor All Star is a classic sneaker that's been around for over 100 years. With its canvas upper and rubber sole, it's comfortable, versatile, and stylish. This particular version comes in a timeless navy blue color that goes well with just about any outfit.",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 6,
    name: "Reebok Classic Leather - White/Gum",
    brand: "Reebok",
    model: "Classic Leather",
    color: "White/Gum",
    size: "9",
    price: 69.99,
    itemPrice: {
      currency: "USD",
      value: 69.99,
      label: "69.99$",
    },
    description:
      "The Reebok Classic Leather is a timeless sneaker that has been a fan favorite since its introduction in 1983. With its simple yet iconic design, the Classic Leather is perfect for both casual wear and athletic activities. The White/Gum colorway adds a touch of sophistication to the shoe, while the gum outsole provides excellent traction and durability. Whether you're hitting the gym or just running errands, the Reebok Classic Leather is a great choice.",
    image:
      "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 7,
    name: "New Balance 574 - Grey/Blue",
    brand: "New Balance",
    model: "574",
    color: "Grey/Blue",
    size: "10",
    price: 99.99,
    itemPrice: {
      currency: "USD",
      value: 99.99,
      label: "99.99$",
    },
    description:
      "A popular lifestyle sneaker featuring New Balance's signature ENCAP cushioning technology and a cool grey and blue colorway.",
    image:
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80",
  },
  {
    id: 8,
    name: "Fila Disruptor II - White/Navy/Red",
    brand: "Fila",
    model: "Disruptor II",
    color: "White/Navy/Red",
    size: "11",
    price: 79.99,
    itemPrice: {
      currency: "USD",
      value: 79.99,
      label: "79.99$",
    },
    description:
      "The Fila Disruptor II is a chunky sneaker that features a leather and synthetic upper with perforated detailing, a cushioned EVA midsole, and a durable rubber outsole. Its iconic design with Fila branding on the side, tongue, and heel has made it a popular choice for those looking for a bold and retro-inspired look.",
    image:
      "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 9,
    name: "Under Armour Charged Rogue - Black/Red",
    brand: "Under Armour",
    model: "Charged Rogue",
    color: "Black/Red",
    size: "9.5",
    price: 109.99,
    itemPrice: {
      currency: "USD",
      value: 109.99,
      label: "109.99$",
    },
    description:
      "The Under Armour Charged Rogue is a sleek and stylish running shoe designed to provide both comfort and performance. Featuring UA's Charged Cushioning® technology and a durable rubber outsole, this shoe offers a smooth and supportive ride that will keep you going mile after mile.",
    image:
      "https://images.unsplash.com/photo-1612902377756-414b2139d5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 10,
    name: "ASICS GEL-Kayano 26 - Blue/White",
    brand: "ASICS",
    model: "GEL-Kayano 26",
    color: "Blue/White",
    size: "10.5",
    price: 159.99,
    itemPrice: {
      currency: "USD",
      value: 159.99,
      label: "159.99$",
    },
    description:
      "The ASICS GEL-Kayano 26 is a high-performance running shoe designed for serious athletes. With its advanced GEL® technology and responsive FlyteFoam® cushioning, this shoe offers exceptional shock absorption and energy return, helping you stay comfortable and focused throughout your run. The breathable mesh upper and supportive midfoot panel also provide a snug and secure fit, while the durable rubber outsole delivers excellent traction on a variety of surfaces.",
    image:
      "https://images.unsplash.com/photo-1561808843-7adeb9606939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 11,
    name: "Saucony Jazz Original Vintage - Green/Yellow",
    brand: "Saucony",
    model: "Jazz Original Vintage",
    color: "Green/Yellow",
    size: "9",
    price: 89.99,
    itemPrice: {
      currency: "USD",
      value: 89.99,
      label: "89.99$",
    },
    description:
      "The Saucony Jazz Original Vintage is a classic running shoe that features a combination of suede, nylon, and mesh materials for a comfortable fit. The shoe also features a padded collar and tongue for additional cushioning and support. The Jazz Original Vintage has a durable rubber outsole that provides excellent traction on various surfaces.",
    image:
      "https://images.unsplash.com/photo-1605732440685-d0654d81aa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 12,
    brand: "Brooks",
    model: "Ghost 11",
    color: "Black/Red",
    size: "11",
    price: 119.99,
    itemPrice: {
      currency: "USD",
      value: 119.99,
      label: "119.99$",
    },
    name: "Brooks Ghost 11 Black/Red Running Shoes - Men's Size 11",
    description:
      "The Brooks Ghost 11 is a neutral running shoe that offers a comfortable and smooth ride. The shoe features a BioMoGo DNA midsole that adapts to your stride and provides cushioning where you need it most. The Ghost 11 also has a segmented Crash Pad that provides smooth transitions from heel to toe. The shoe has a breathable mesh upper that keeps your feet cool and comfortable.",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 13,
    brand: "Mizuno",
    model: "Wave Rider 22",
    color: "Orange/Grey",
    size: "10.5",
    price: 139.99,
    itemPrice: {
      currency: "USD",
      value: 139.99,
      label: "139.99$",
    },
    name: "Mizuno Wave Rider 22 Orange/Grey Running Shoes - Men's Size 10.5",
    description:
      "The Mizuno Wave Rider 22 is a neutral running shoe that offers a combination of cushioning and responsiveness. The shoe features Mizuno's Wave technology in the midsole that provides a smooth and stable ride. The Wave Rider 22 also has a breathable mesh upper that keeps your feet cool and dry. The shoe has a durable rubber outsole that provides excellent traction on various surfaces.",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80",
  },
  {
    id: 15,
    brand: "On Running",
    model: "Cloudflow",
    color: "Blue/White",
    size: "9.5",
    price: 139.99,
    itemPrice: {
      currency: "USD",
      value: 139.99,
      label: "139.99$",
    },
    name: "On Running Cloudflow Blue/White Running Shoes - Men's Size 9.5",
    image:
      "https://images.unsplash.com/photo-1523191665038-d75548b1a52a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description: `On Running Cloudflow Blue/White Running Shoes - Men's Size 9.5: These shoes from On Running feature a stylish blue and white colorway, with a lightweight design that's perfect for running. The Cloudflow technology provides cushioning and support, while the unique outsole design offers a comfortable, natural ride.`,
  },
  {
    id: 16,
    brand: "Salomon",
    model: "Speedcross 5",
    color: "Black/Red",
    size: "10.5",
    price: 129.99,
    itemPrice: {
      currency: "USD",
      value: 129.99,
      label: "129.99$",
    },
    name: "Salomon Speedcross 5 Black/Red Trail Running Shoes - Men's Size 10.5",
    description: `Salomon Speedcross 5 Black/Red Trail Running Shoes - Men's Size 10.5: The Salomon Speedcross 5 shoes are perfect for trail running, with a durable design that can handle any terrain. The black and red colorway is both stylish and functional, with a comfortable fit and excellent traction on both wet and dry surfaces.`,
    image:
      "https://images.unsplash.com/photo-1521774971864-62e842046145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 17,
    brand: "Merrell",
    model: "Trail Glove 5",
    color: "Grey/Blue",
    size: "11",
    price: 99.99,
    itemPrice: {
      currency: "USD",
      value: 99.99,
      label: "99.99$",
    },
    name: "Merrell Trail Glove 5 Grey/Blue Trail Running Shoes - Men's Size 11",
    description: `Merrell Trail Glove 5 Grey/Blue Trail Running Shoes - Men's Size 11: The Merrell Trail Glove 5 shoes offer a minimalistic, barefoot feel for a truly natural running experience. The grey and blue colorway is sleek and stylish, with a Vibram outsole that provides excellent grip on a variety of surfaces. These shoes are perfect for runners who prefer a minimalist approach to their footwear.`,
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    id: 18,
    brand: "Keen",
    model: "Targhee III",
    color: "Brown/Black",
    size: "10",
    price: 139.99,
    itemPrice: {
      currency: "USD",
      value: 139.99,
      label: "139.99$",
    },
    name: "Keen Targhee III Brown/Black Hiking Shoes - Men's Size 10",
    description: `
    The Keen Targhee III is a sturdy and reliable hiking shoe for men. With a brown and black color scheme, it offers a classic look for outdoor adventurers. The shoe is built with a waterproof and breathable membrane to keep your feet dry and comfortable in wet conditions, and a dual-density EVA footbed for cushioned support. The Targhee III also features a rubber toe cap for added durability and a non-marking outsole with 4mm lugs for excellent traction on various terrains.`,
    image:
      "https://images.unsplash.com/photo-1579446565308-427218a2c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: 19,
    brand: "Timberland",
    model: "6-Inch Premium",
    color: "Wheat",
    size: "9.5",
    price: 189.99,
    itemPrice: {
      currency: "USD",
      value: 189.99,
      label: "189.99$",
    },
    name: "Timberland 6-Inch Premium Wheat Boots - Men's Size 9.5",
    description: `The Timberland 6-Inch Premium Wheat Boots are a classic style that has been popular for decades. These boots are made with premium leather and feature a rustproof hardware for long-lasting wear. The padded collar and EVA midsole provide cushioning and support for all-day comfort. The rubber lug outsole delivers excellent traction on both wet and dry surfaces, making it a great choice for outdoor activities.`,
    image:
      "https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 20,
    brand: "Doc Martens",
    model: "1460",
    color: "Black",
    size: "11",
    price: 149.99,
    itemPrice: {
      currency: "USD",
      value: 149.99,
      label: "149.99$",
    },
    name: "Doc Martens 1460 Black Boots - Men's Size 11",
    description: `The Doc Martens 1460 Black Boots are a timeless classic that has been a staple in many wardrobes for over 60 years. Made with durable leather, these boots feature the iconic yellow stitching and AirWair heel loop for a signature look. The cushioned sole provides comfort and support for all-day wear, while the slip-resistant sole delivers excellent traction on various surfaces. These boots are perfect for adding a touch of edge to any outfit.`,
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function Home() {
  const handleUpload = (fileId: string) => {
    console.log(`Uploaded file ID: ${fileId}`);
  };

  return (
    <>
      <main>
        {/* first section */}
        <section className="mb-16 mt-14 flex flex-col lg:flex-row items-center">
          <div className="lg:max-w-lg xl:max-w-xl">
            <h1
              className="text-4xl md:text-6xl xl:text-8xl"
              aria-label="Helpful products. For everyone."
            >
              Shoes Hub
            </h1>
            <div
              className="text-4xl md:text-6xl xl:text-8xl"
              aria-hidden="true"
            >
              For everyone.
            </div>
          </div>
          <div className="xl:ml-32 w-80 h-80 relative shadow-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fill
              alt="Side angle of a smiling woman from the shoulders up. She is using her smartphone."
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100%"
            />
          </div>
        </section>

        <div className="text-center pt-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl lg:text-6xl">
            Care your shoes with our products
          </h2>
          <p
            className="text-3xl lg:text-5xl max-w-4xl mt-9 text-[#5f6368]"
            dangerouslySetInnerHTML={{
              __html: `It’s our responsibility <span>to provide you better facility</span>`,
            }}
          />
        </div>
        <div
          className="m-auto pt-10 grid grid-cols-1 gap-8
       md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3"
        >
          {(ProductData || []).map((data) => {
            const { id } = data || {};
            return <AccountCard key={id} cardDetails={data} />;
          })}
        </div>
      </main>
    </>
  );
}
