"use client";

import VerticalTechScroller from "@/components/ui/VerticalTechScroller";

export default function IntroText() {

    return (
        <div className="flex-col">
            <p className="text-center text-2xl md:text-4xl font-bold text-purple-500 mt-8 md:mt-14 2xl:mt-8 cursor-default select-none">Christian Tucker</p>
            <p className="text-center text-xl font-bold text-purple-300 mt-8 md:mt-14 2xl:mt-8 cursor-default select-none">Early-career software engineer focused on building clean, <br/>
                maintainable full-stack web applications</p>

            <VerticalTechScroller />
        </div>
    );
}
