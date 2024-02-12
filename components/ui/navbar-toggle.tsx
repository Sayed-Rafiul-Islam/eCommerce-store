"use client"

import * as React from "react"
import { Menu, Moon, Sun } from "lucide-react"


import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data : Category[]
}


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";

export const NavbarToggle : React.FC<MainNavProps> = ({
  data
}) => {

  const pathname = usePathname()
  const routes = data.map((route) => ({
      href : `/category/${route._id}`,
      label : route.name,
      active : pathname === `/category/${route._id}`
  }))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
      <nav
            className="flex flex-col"
        >
            {routes.map((route)=>(
              <DropdownMenuItem asChild>
                <Link 
                    key={route.href} 
                    href={route.href}
                    className={cn(
                        'text-sm font-semibold transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}
                >
                    {route.label}
                </Link>
              </DropdownMenuItem>  
            ))}
        </nav>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
