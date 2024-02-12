import Link from "next/link";


import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { NavbarToggle } from "./ui/navbar-toggle";

const Navbar = async () => {

    const categories = await getCategories()
    return ( 
        <div className="border-b w-full">
            <Container >
                <div className="px-4 sm:px-6 lg:px-8 relative flex lg:flex-row md:flex-row items-center h-16">
                        <div className="flex flex-row-reverse lg:flex-row md:flex-row items-center">
                            <Link href='/' className="ml-4 lg:ml-0 flex gap-x-2">
                                <p className="font-bold text-xl">Cloth&apos;s Store</p>
                            </Link>
                            <div className="hidden md:block lg:block">
                                <MainNav data={categories}/>
                            </div>
                            <div className="block md:hidden lg:hidden">
                                <NavbarToggle data={categories} />
                            </div>
                        </div>
                        <NavbarActions />
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;