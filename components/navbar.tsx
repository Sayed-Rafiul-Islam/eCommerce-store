import Link from "next/link";


import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {

    const categories = await getCategories()
    return ( 
        <div className="border-b">
            <Container >
                <div className="px-4 sm:px-6 lg:px-8 relative flex items-center h-16">
                        <Link href='/' className="ml-4 lg:ml-0 flex gap-x-2">
                            <p className="font-bold text-xl">STORE</p>
                        </Link>
                        <MainNav data={categories}/>
                    <NavbarActions />
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;