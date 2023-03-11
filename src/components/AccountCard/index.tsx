import Image from "next/image";
import Link from "next/link";
import { ShoeProduct } from "~/src/pages";

const AccountCard = ({ cardDetails }: { cardDetails: ShoeProduct }) => {
  const { id, brand, model, price, image } = cardDetails || {};
  const productUrl = model.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link
      href={{
        pathname: `/${productUrl}`,
        query: { id },
      }}
    >
      <div className="rounded shadow-xl flex flex-col text-black border border-solid border=[#dadce0]">
        <div className="flex flex-col">
          <div className="flex">
            {/* image */}
            <div className="relative min-w-[20px] w-full h-96 flex">
              <Image
                fill
                src={image}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
                sizes="100%"
              />
              <div className="price-tag absolute bottom-0 py-3 px-5 bg-blackShade text-whiteShade">
                <span>Price: {price}$</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pr-3 pl-3 pb-6">
            <p className="text-sm text-textColor g-white">{brand}</p>
            <p className="text-sm text-textColor g-white">{model}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AccountCard;
