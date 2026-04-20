import { links } from "@/config/links";
import { images } from "../config/images";
import { GitHubStarsButton } from "./animate-ui/components/buttons/github-stars";
import { pages } from "@/config/pages";

export default function Header() {
  return (
    <div className="absolute inset-x-0 top-6 z-50 pointer-events-auto">
      <nav className="flex justify-between items-center p-4 bg-black/40 mx-3 rounded-xl px-8">
        <a href={pages.ROOT}>
          <img src={images.ICON} alt="Omi Icon" className="w-10 h-10" />
        </a>
        <a href={links.GITHUB}>
          <GitHubStarsButton username="omilang" repo="omi" />
        </a>
      </nav>
    </div>
  )
}
