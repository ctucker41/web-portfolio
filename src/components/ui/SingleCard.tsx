import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

function SingleCard({
                        title,
                        content,
                        className = "",
                    }: {
    title: string;
    content: React.ReactNode;
    className?: string;
}) {
    return (
        <Card className={`h-[500px] md:h-[600px] bg-gray-900 border border-slate-600 text-white ${className}`}>
            <CardHeader className="flex items-center justify-start text-lg md:text-3xl whitespace-nowrap font-semibold text-purple-300">
                {title}
            </CardHeader>
            <CardContent className="flex flex-col gap-4 items-start justify-start text-white">{content}</CardContent>
        </Card>
    );
} export default SingleCard;