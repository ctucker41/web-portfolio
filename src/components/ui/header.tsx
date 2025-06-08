import React from "react";
import AnimatedText from "./AnimatedText";
import VerticalTechScroller from "./VerticalTechScroller";

const Header: React.FC = () => {
    return (
        <header className="text-center mt-8">
            <AnimatedText />
            <VerticalTechScroller />
        </header>
    );
};

export default Header;
