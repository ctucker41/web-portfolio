import { Card } from "@/components/ui/card";

export default function ExpertiseCard1() {
    return (
        <div className="items-center">

            <div className="w-full flex flex-row gap-2 justify-center items-center">

                <Card className="h-[500px] w-40 md:w-96 bg-gray-900 border border-slate-600 text-white px-4">

                    <h1 className="text-xl lg:text-3xl font-semibold text-center text-purple-300 mt-4 mb-4">Languages</h1>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/typescript.svg" alt="Typescript" className="w-4 h-4" />
                                <span className="lg:text-lg">Typescript</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/javascript.svg" alt="Javascript" className="w-4 h-4" />
                                <span className="lg:text-lg">Javascript</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/python.svg" alt="Python" className="w-4 h-4" />
                                <span className="lg:text-lg">Python</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/sql.svg" alt="SQL" className="w-4 h-4" />
                                <span className="lg:text-lg">SQL</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/cpp.svg" alt="C++" className="w-4 h-4" />
                                <span className="lg:text-lg">C / C++</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <img src="/bash.svg" alt="Bash & PowerShell" className="w-4 h-4" />
                                <span className="lg:text-lg">Bash / PowerShell</span>
                            </div>


                    </Card>

            </div>
        </div>
    );
}