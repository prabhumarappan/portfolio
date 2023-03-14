import Image from "next/image";

import ctran from "../public/ctran.jpg";
import irc from "../public/irc.jpg";
import lotr from "../public/lotr.jpeg";
import cryptoning from "../public/cryptoning.jpeg";

export default function Work() {
    return (
        <section id="projects" className="text-center p-10 pt-0">
            <h1 className="text-5xl text-center">Experience</h1>
            <div className="flex-wrap flex md:w-4/6 mx-auto">
                <div className="justify-center w-full bg-red-400 m-5 p-5 rounded-md">
                    <h2 className="text-4xl">CTran Data Pipeline and Visualization</h2>
                    <div className="w-full mt-5 md:flow-root">
                        <Image src={ctran} alt="Photo of Prabhu Marappan" className="w-1/3 block md:float-left"></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="justify-center w-full bg-red-400 m-5 p-5 rounded-md">
                    <h2 className="text-4xl">IRC Service</h2>
                    <div className="w-full mt-5 md:flow-root">
                        <Image src={irc} alt="Photo of Prabhu Marappan" className="w-1/3 block md:float-left"></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="justify-center w-full bg-red-400 m-5 p-5 rounded-md">
                    <h2 className="text-4xl">Lord of the Rings (LOTR) SDK</h2>
                    <div className="w-full mt-5 md:flow-root">
                        <Image src={lotr} alt="Photo of Prabhu Marappan" className="w-1/3 block md:float-left"></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="justify-center w-full bg-red-400 m-5 p-5 rounded-md">
                    <h2 className="text-4xl">Cryptoning</h2>
                    <div className="w-full mt-5 md:flow-root">
                        <Image src={cryptoning} alt="Photo of Prabhu Marappan" className="w-1/3 block md:float-left"></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}