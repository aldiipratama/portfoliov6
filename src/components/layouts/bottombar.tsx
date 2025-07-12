import { navbarItems } from "@/data/navbar-items";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function ButtomBar() {
  return (
    <NavigationMenu className="fixed bottom-0 border-t inset-x-0 bg-card/50 backdrop-blur-sm z-20">
      <NavigationMenuList className="justify-between w-screen px-10 py-4">
        {
          navbarItems.map((item, idx) => (
            <NavigationMenuItem key={idx}>
              <NavigationMenuLink href={`#${item.link}`} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
                {item.icon && <item.icon />}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
          )
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}