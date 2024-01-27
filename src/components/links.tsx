import {
  CartIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "./icons/IconsUserNavbar";

export const links = [
  {
    href: "/home",
    name: "Inicio",
    icon: <HomeIcon />,
  },
  {
    href: "/favorites",
    name: "Deseos",
    icon: <HeartIcon />,
  },
  {
    href: "/cart",
    name: "Carrito",
    icon: <CartIcon />,
  },
  {
    href: "/account",
    name: "Cuenta",
    icon: <UserIcon />,
  },
];
