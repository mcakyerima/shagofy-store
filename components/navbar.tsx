import Container from "@/components/ui/container";
import NavbarActions from "./navbar-action";
import MainNav from "./main-nav";
import Link from "next/link";
import { Category } from "@/types/types";

export const revalidate = 0;
interface NavbarProps {
  categories: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  return (
    <div className="border-b sticky top-0 z-20 backdrop-filter backdrop-blur-lg bg-opacity-80">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-12 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl ">Gadfly</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
