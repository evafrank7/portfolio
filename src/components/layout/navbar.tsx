"use client";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
function NavBar() {
    return (
        <header className="flex justify-center items-center py-4 bg-gray-100">
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-base nav-text"
                        >
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-base nav-text"
                        >
                            <Link href="/projects"> Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-base nav-text"
                        >
                            <a
                                href="/resume/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-base nav-text"
                        >
                            <Link href="/contact">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
export default NavBar;
