"use client"

import React from "react";
import { Card } from "@/components/ui/card";


export default function SectionOne() {
    return (
        <div className="mt-32 md:ml-48 md:mr-48 flex flex-col md:flex-row justify-center items-center">

            <Card className="p-8 w-[90%] mx-auto md:w-[550px] bg-gray-900 border-slate-600 border-[1px] flex flex-col items-center">

                <h2 className="text-xl  md:text-3xl flex justify-center items-center text-purple-400 font-bold">Projects</h2>

                <a target="_blank" href="https://github.com/ctucker41/workout-nutrition-app.git" >
                    <p className="m-8 flex flex-row text-white text-xs md:text-sm leading-relaxed indent-6">
                        <img src="/postgreSQL.svg" alt="PostgreSQL Logo" className="w-5 h-5 align-middle" />
                        Full-stack app with JWT auth, PostgreSQL persistence, and protected REST APIs.<br/><br/>
                        Node.js, Express, PostgreSQL, JWT
                    </p>
                </a>

                <a target="_blank" href="https://github.com/ctucker41/SysInfoScript.git" >
                    <p className="m-8 flex flex-row text-white text-xs md:text-sm leading-relaxed indent-6">
                        <img src="/powershell.svg" alt="PowerShell Logo" className="w-4 h-4 align-middle" />
                        System diagnostics script that collects hardware and OS metrics and surfaces health warnings for conditions like low disk space or elevated CPU temperatures.<br/><br/>
                        PowerShell, WMI, CIM
                    </p>
                </a>

            </Card>

        </div>

    );
}