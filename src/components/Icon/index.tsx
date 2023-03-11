import { ReactComponent as InstagramSvg } from "@/assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "@/assets/facebook.svg";
import { ReactComponent as YoutubeSvg } from "@/assets/youtube.svg";
import { ReactComponent as TikTokSvg } from "@/assets/tiktok.svg";
import { ReactComponent as CloseSvg } from "@/assets/close.svg";
import { ReactComponent as ShoppingCartSvg } from "@/assets/shoppingCart.svg";
import { ReactComponent as DeleteSvg } from "@/assets/delete.svg";
import { ReactComponent as NavigationSvg } from "@/assets/navigation.svg";

/** Props Types for Svg Component */
type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type IconType = {
  instagram: IconSvgComponent;
  facebook: IconSvgComponent;
  youtube: IconSvgComponent;
  tiktok: IconSvgComponent;
  close: IconSvgComponent;
  shoppingCart: IconSvgComponent;
  delete: IconSvgComponent;
  navigation: IconSvgComponent;
};

export const ICON_MAP: IconType = {
  instagram: InstagramSvg,
  facebook: FacebookSvg,
  youtube: YoutubeSvg,
  tiktok: TikTokSvg,
  close: CloseSvg,
  shoppingCart: ShoppingCartSvg,
  delete: DeleteSvg,
  navigation: NavigationSvg,
};

export type IconTypeProp =
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok"
  | "close"
  | "shoppingCart"
  | "delete"
  | "navigation";

export type IconProps = {
  icon: IconTypeProp;
  className?: string;
};

const Icon = ({ icon, className }: IconProps) => {
  const ICON_COMPONENT = ICON_MAP[icon];

  if (!ICON_COMPONENT) {
    return null;
  }

  return <ICON_COMPONENT className={className} />;
};

export default Icon;
