"use client";
import React from "react";
import { Navbar } from "../navbar";
import NavLogo from "@/assets/images/Human.png";

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
        <button className="rounded-md bg-white border border-gray-300 px-5 py-2 max-lg:w-full">
          Login
        </button>
      ),
    },
  ];

  // Example conditional routes
  const conditionalRoutes = {
    "/pricing": true, // Show pricing page
    "/admin": false, // Hide admin page
  };

  return (
    <div className="mb-16 lg:mb-20">
      <Navbar
        className="max-w-[1920px] mx-auto sm:px-[1.5%]"
        position="fixed"
        shadow="shadow-none"
        backgroundColor="bg-gray-200 lg:py-4"
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
