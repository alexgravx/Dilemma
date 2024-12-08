"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
 
export function HoverButton() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span className="text-base">Start the game !</span>
      </HoverBorderGradient>
    </div>
  );
}