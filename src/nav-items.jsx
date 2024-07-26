import { Rocket, Star, Globe, Satellite } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Rocket className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Exploration",
    to: "/exploration",
    icon: <Star className="h-4 w-4" />,
    page: <div>Exploration Page</div>,
  },
  {
    title: "Exoplanets",
    to: "/exoplanets",
    icon: <Globe className="h-4 w-4" />,
    page: <div>Exoplanets Page</div>,
  },
  {
    title: "Technology",
    to: "/technology",
    icon: <Satellite className="h-4 w-4" />,
    page: <div>Space Technology Page</div>,
  },
];
