import Link from "next/link";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import AnimatedButton from "./HeaderButton";
import Logo from "../public/Logo-removebg.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <h1 className="text-4xl font-semibold">
            Hossam <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* disktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
          <Link href="/contact">
            <AnimatedButton />
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
