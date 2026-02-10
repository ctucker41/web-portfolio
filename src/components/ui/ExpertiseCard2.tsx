import { Card } from "@/components/ui/card";

export default function ExpertiseCard2() {
    return (
        <div className="items-center">

            <div className="w-full flex flex-row gap-2 justify-center items-center">

                <Card className="h-[500px] w-40 lg:w-96 bg-gray-900 border border-slate-600 text-white px-4">

                    <h1 className="text-xl lg:text-3xl font-semibold text-center text-purple-300 mt-4 mb-4">Tools & Platforms</h1>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/nodejs.svg" alt="Node.js" className="w-4 h-4" />
                        <span className="lg:text-lg">Node.js</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/.svg" alt="Express" className="w-4 h-4" />
                        <span className="lg:text-lg">Express</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/postgreSQL.svg" alt="PostgreSQL" className="w-4 h-4" />
                        <span className="lg:text-lg">PostgreSQL</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/react.svg" alt="React" className="w-4 h-4" />
                        <span className="lg:text-lg">React</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/nextjs.svg" alt="Next.js" className="w-4 h-4" />
                        <span className="lg:text-lg">Next.js</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/git.svg" alt="Git & GitHub" className="w-4 h-4" />
                        <span className="lg:text-lg">Git / GitHub</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/linux.svg" alt="Linux" className="w-4 h-4" />
                        <span className="lg:text-lg">Linux</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/powershell.svg" alt="Powershell" className="w-4 h-4" />
                        <span className="lg:text-lg">Powershell</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img src="/ruby.svg" alt="Ruby" className="w-4 h-4" />
                        <span className="lg:text-lg">Ruby</span>
                    </div>
                </Card>

            </div>
        </div>
    );
}