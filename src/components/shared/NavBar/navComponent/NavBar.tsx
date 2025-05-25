"use client";
import { MyButton } from "@/components/ui/buttons/my-button";
import React from "react";
import { Navbar } from "../navbar";
import NavLogo from "@/assets/icons/logo.png";

const NavBar = () => {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  // Example buttons with custom components
  const buttons = [
    {
      label: "Login",
      onClick: () => console.log("Login clicked"),
      component: (
        <MyButton
          variant="outline"
          size="md"
          className="rounded-md bg-white max-lg:w-full"
        >
          Login
        </MyButton>
      ),
    },
  ];

  // Example conditional routes
  const conditionalRoutes = {
    "/pricing": true, // Show pricing page
    "/admin": false, // Hide admin page
  };

  return (
    <div className="mb-16">
      <Navbar
        className="max-w-[1920px] mx-auto px-[1.5%]"
        position="fixed"
        shadow="shadow-none"
        backgroundColor="bg-secondary py-4"
        logo={NavLogo.src}
        activeTextColor="text-accent hover:!text-accent-light font-medium"
        textColor="text-nav-text font-medium"
        hoverTextColor="hover:text-nav-text-light"
        navItems={navItems}
        buttons={buttons}
        hideOnScroll
        conditionalRoutes={conditionalRoutes}
        onNavItemClick={(item) => console.log("Nav item clicked:", item.label)}
        onButtonClick={(index, button) =>
          console.log(`Button ${index} clicked:`, button.label)
        }
      />
    </div>
  );
};

export default NavBar;
