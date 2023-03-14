import Image from "next/image";
import { BsGithub } from "react-icons/bs";

import ctran from "../public/ctran.jpg";
import irc from "../public/irc.jpg";
import lotr from "../public/lotr.jpeg";
import cryptoning from "../public/cryptoning.jpeg";

export default function Projects() {
    return (
        <section id="projects" className="text-center p-10 pt-0">
            <h1 className="text-5xl text-center">Projects</h1>
            <div className="flex-wrap flex md:w-4/6 mx-auto">
                <div className="justify-center w-full bg-blue-400 m-5 p-5 rounded-md shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">
                            CTran Data Pipeline and Visualization
                        </h2>
                        <a
                            href="https://github.com/prabhumarappan/cs510-data-engineering"
                            className="text-xl"
                        >
                            <BsGithub className="text-4xl" />
                        </a>
                    </div>
                    <div className="w-full mt-5 md:flow-root">
                        <Image
                            src={ctran}
                            alt="Photo of CTRAN"
                            className="w-1/3 block md:float-left"
                        ></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">
                            • Designed a dependable model data collection using
                            Google Cloud Platform APIs, including producer and
                            consumer problems using JSON data and verifying them
                            with Python scripts which diminished by 30% time.{" "}
                            <br />
                            • filtered the data using decoding and filling
                            approaches by interpolating and altering
                            visualizations with 90% accuracy.
                            <br />• Created the MySQL database, processed batch
                            data, and implemented visualizations used in local
                            transportation systems.
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-blue-400 m-5 p-5 rounded-md shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">IRC Service</h2>
                        <a
                            href="https://github.com/prabhumarappan/CS594-project"
                            className="text-xl"
                        >
                            <BsGithub className="text-4xl" />
                        </a>
                    </div>
                    <div className="w-full mt-5 md:flow-root">
                        <Image
                            src={irc}
                            alt="Photo of IRC"
                            className="w-1/3 block md:float-left"
                        ></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-blue-400 m-5 p-5 rounded-md shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">
                            Lord of the Rings (LOTR) SDK
                        </h2>
                        <a
                            href="https://github.com/prabhumarappan/prabhu-lotr-SDK"
                            className="text-xl"
                        >
                            <BsGithub className="text-4xl" />
                        </a>
                    </div>
                    <div className="w-full mt-5 md:flow-root">
                        <Image
                            src={lotr}
                            alt="Photo of Lord of the Rings"
                            className="w-1/3 block md:float-left"
                        ></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-blue-400 m-5 p-5 rounded-md shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">Cryptoning</h2>
                        <a
                            href="https://github.com/prabhumarappan/cryptoning"
                            className="text-xl"
                        >
                            <BsGithub className="text-4xl" />
                        </a>
                    </div>
                    <div className="w-full mt-5 md:flow-root">
                        <Image
                            src={cryptoning}
                            alt="Photo of Crypto Market"
                            className="w-1/3 block md:float-left"
                        ></Image>
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
