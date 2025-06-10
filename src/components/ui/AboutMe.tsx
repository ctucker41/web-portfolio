import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
    return (
        <section className="flex justify-center items-center mt-48 px-4">
            <Card className="relative bg-gray-900 border border-slate-600 max-w-3xl w-full p-8">

                <div className="absolute -top-8 left-8">
                    <Avatar className="w-24 h-24 border-4 border-gray-900">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Christian Tucker" />
                        <AvatarFallback>CT</AvatarFallback>
                    </Avatar>
                </div>

                <CardContent className="mt-8">
                    <h2 className="text-3xl font-bold text-purple-300 mb-4">
                        About Me
                    </h2>
                    <p className="text-white text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci
                        nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula
                        sed pretium tristique, nunc magna sagittis risus
                    </p>
                </CardContent>
            </Card>
        </section>
    );
};

export default AboutMe;