import AnimatedBackground from "@/components/background/animatedbackground";
import ContactMe from "@/components/ui/ContactMe";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";


export default function Page() {

    return (
        <div className="relative z-10 min-h-screen">

            <AnimatedBackground>
                <h1></h1>
            </AnimatedBackground>

            <main className="flex flex-col">

                    <Card className="flex flex-col bg-gray-900 border border-slate-600 w-full h-auto">
                        <CardHeader className="flex justify-center items-center text-purple-300 text-3xl font-semibold">
                            Trademarks
                        </CardHeader>

                        <CardContent className="flex justify-center text-white text-md underline">
                            <Link href="/">Return to Home Page</Link>
                        </CardContent>

                        <div className="flex flex-col items-start gap-4">
                            <CardContent className="text-white">
                                Copyright © 2025 JetBrains s.r.o. <br /> <br />
                                WebStorm, PyCharm, RubyMine, CLion, and their <br /> respective logos are trademarks of JetBrains s.r.o. <br /> <br />
                                This site is not affiliated with or endorsed by JetBrains.
                            </CardContent>
                            <CardContent className="text-white">
                                Visual Studio Code is a trademark of Microsoft Corporation. <br />
                                This site is not affiliated with or endorsed by Microsoft.
                            </CardContent>
                            <CardContent className="text-white">
                                VMware is a registered trademark of VMware, Inc. <br />
                                This site is not affiliated with or endorsed by VMware.
                            </CardContent>
                            <CardContent className="text-white">
                                VirtualBox is a registered trademark of Oracle Corporation. <br/>
                                This site is not affiliated with or endorsed by Oracle.
                            </CardContent>
                            <CardContent className="text-white">

                            </CardContent>
                            <CardContent className="text-white">

                            </CardContent>
                            <CardContent className="text-white">

                            </CardContent>
                        </div>
                    </Card>

            </main>

            <footer>

                <ContactMe />

            </footer>

        </div>
    );
}