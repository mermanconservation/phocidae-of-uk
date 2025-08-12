import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Waves } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/field-guide", label: "Field Guide" },
    { href: "/map", label: "Map" },
    { href: "/viewing-guide", label: "Viewing Guide" },
    { href: "/seasonal", label: "Seasonal Info" },
    { href: "/donate", label: "Donate" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              UK Seals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={isActive(item.href) ? "default" : "ghost"}
                asChild
                className="text-sm"
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    asChild
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;