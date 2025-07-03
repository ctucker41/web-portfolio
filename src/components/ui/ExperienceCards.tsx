"use client";

import React from "react";
import HoverCard1 from "@/components/ui/HoverCard1";
import HoverCard2 from "@/components/ui/HoverCard2";

export default function ExperienceCards() {
    return (
        <div className="flex flex-col md:flex-row md:justify-center mt-32">
            <HoverCard1 />
            <HoverCard2 />
        </div>
    );
}