'use client'
import Navbar from "./navbar"
import { MaquinaDeEscrever } from "./MaquinaDeEscrever";

export default function MainSection(){
    return (
        <section className="h-screen w-screen" >
            <Navbar />
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <div className="flex justify-center">
                        <div className="max-w-[800px]">
                            <p className="text-lg text-rose-600">
                                <MaquinaDeEscrever text="XXXXXX: " esconderCursor />
                                {/* <MaquinaDeEscrever text="OLÁ, EU SOU " esconderCursor /> */}
                            </p> <br />
                            <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                <MaquinaDeEscrever text="XXXXXXXX " delay={2200} esconderCursor />
                                {/* <MaquinaDeEscrever text="Yang Araújo Neiva " delay={2200} esconderCursor /> */}
                            </h2>
                            <p className="text-lg text-neutral-500 dark:text-neutral-300">
                                <MaquinaDeEscrever text="XXXXXXXX " delay={4000} esconderCursor />
                                {/* <MaquinaDeEscrever text="Software Engineer/Full Stack Developer" delay={4300} esconderCursor /> */}
                            </p>
                        </div>
                        {/* <div className="max-w-[800px]">
                            <p className="text-lg text-rose-600">
                                <MaquinaDeEscrever text="Olá, Eu sou: " />
                            </p>
                            <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            <strong>  Strong  </strong> <br />
                            <span className="text-primary dark:text-primary-400">Normal</span>
                            </h2>
                            <p className="text-lg text-neutral-500 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                officia consequatur adipisci tenetur repudiandae rerum quos.
                            </p>
                        </div> */}
                    </div>
                </section>
                </div>
        </section>
    )
}
