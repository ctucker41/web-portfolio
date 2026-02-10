"use client";

import React from "react";
import ExpertiseCard1 from "@/components/ui/ExpertiseCard1";
import ExpertiseCard2 from "@/components/ui/ExpertiseCard2";

export default function ExpertiseCards() {
    return (
        <div className="flex flex-row justify-center gap-4 md:gap-24 mt-16">
            <ExpertiseCard1 />
            <ExpertiseCard2 />
        </div>
    );
}