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
                <div className="justify-center w-full bg-white m-5 p-5 rounded-lg shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">
                            CTran Data Pipeline and Visualization
                        </h2>
                        <a
                            href="https://github.com/prabhumarappan/cs510-data-engineering"
                            className="text-xl"
                            target="_blank"
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
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-lg">
                            • Designed and implemented a data pipeline to
                            process daily data from CTRAN APIs and push them to
                            PostgreSQL database using Kafka producer and
                            consumer
                            <br />• Created the PostgreSQL database, processed
                            batch data, and implemented visualizations used in
                            local transportation systems.
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-white m-5 p-5 rounded-lg shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">IRC Service</h2>
                        <a
                            href="https://github.com/prabhumarappan/CS594-project"
                            className="text-xl"
                            target="_blank"
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
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-lg">
                            • Internet Relay Chat Service project that allows
                            users to run a server and connect to other users
                            through the client program
                            <br />
                            • Implemented the server and client programs using
                            Python sockets and threads to handle multiple
                            clients
                            <br />• Send Message, Chatrooms, Private Message
                            were few of the features implemented
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-white m-5 p-5 rounded-lg shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">
                            Lord of the Rings (LOTR) SDK
                        </h2>
                        <a
                            href="https://github.com/prabhumarappan/prabhu-lotr-SDK"
                            className="text-xl"
                            target="_blank"
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
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-lg">
                            • Lord of the Rings (LOTR) project was an SDK
                            created in Python that allows developers to fetch
                            LOTR resources like boook, chapter, character,
                            movies and quotes directly from the terminal!
                            <br />
                            • Developed a python package and published it to
                            PyPI
                            <br />• Created a well documented README on how to
                            use the SDK
                        </p>
                    </div>
                </div>
                <div className="justify-center w-full bg-white m-5 p-5 rounded-lg shadow-xl">
                    <div className="w-full flex">
                        <h2 className="text-4xl mx-auto">Cryptoning</h2>
                        <a
                            href="https://github.com/prabhumarappan/cryptoning"
                            className="text-xl"
                            target="_blank"
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
                        <p className="w-2/3 sm:pt-5 md:float-right pl-5 text-lg">
                            • Created a React app to add cryptocurrencies to a
                            watchlist and track them
                            <br />
                            • Used Twitter APIs to read tweets about a selected
                            cryptocurrency and display them
                            <br />• Used Coinmarketcap and Cryptocompare to get
                            latest prices and history for a selected
                            cryptocurrency
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
