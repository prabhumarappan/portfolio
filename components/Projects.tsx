import Image from "next/image";
import { BsGithub } from "react-icons/bs";

import ctran from "../public/ctran.jpg";
import irc from "../public/irc.jpg";
import lotr from "../public/lotr.jpeg";
import cryptoning from "../public/cryptoning.jpeg";

interface Project {
    title: string;
    image: any;
    description: string[];
    github: string;
}

const allProjects = [
    {
        title: "CTran Data Pipeline and Visualization",
        image: ctran,
        description: [
            "Designed and implemented a data pipeline to process daily data from CTRAN APIs and push them to PostgreSQL database using Kafka producer and consumer",
            "Created the PostgreSQL database, processed batch data, and implemented visualizations used in local transportation systems.",
        ],
        github: "https://github.com/prabhumarappan/cs510-data-engineering",
    },
    {
        title: "IRC Service",
        image: irc,
        description: [
            "Internet Relay Chat Service project that allows users to run a server and connect to other users through the client program",
            "Implemented the server and client programs using Python sockets and threads to handle multiple clients",
            "Send Message, Chatrooms, Private Message were few of the features implemented",
        ],
        github: "https://github.com/prabhumarappan/CS594-project",
    },
    {
        title: "Lord of the Rings (LOTR) SDK",
        image: lotr,
        description: [
            "Lord of the Rings (LOTR) project was an SDK created in Python that allows developers to fetch LOTR resources like boook, chapter, character, movies and quotes directly from the terminal!",
            "Developed a python package and published it to PyPI",
            "Created a well documented README on how to use the SDK",
        ],
        github: "https://github.com/prabhumarappan/prabhu-lotr-SDK",
    },
    {
        title: "Cryptoning",
        image: cryptoning,
        description: [
            "Created a React app to add cryptocurrencies to a watchlist and track them",
            "Used Twitter APIs to read tweets about a selected cryptocurrency and display them",
            "Used Coinmarketcap and Cryptocompare to get latest prices and history for a selected cryptocurrency",
        ],
        github: "https://github.com/prabhumarappan/cryptoning",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="text-center p-10">
            <h1 className="text-5xl text-center">Projects</h1>
            <div className="flex-wrap flex md:w-4/6 xl:w-3/6 mx-auto">
                {allProjects.map((project: Project) => (
                    <div
                        className="justify-center w-full bg-white m-5 p-5 rounded-lg shadow-xl"
                        key={project.title}
                    >
                        <div className="w-full flex">
                            <h2 className="text-4xl mx-auto">
                                {project.title}
                            </h2>

                            <BsGithub className="text-4xl">
                                <a
                                    href={project.github}
                                    className="text-xl"
                                    target="_blank"
                                ></a>
                            </BsGithub>
                        </div>
                        <div className="w-full mt-5 md:flow-root">
                            <Image
                                src={project.image}
                                alt="Photo of CTRAN"
                                className="md:w-full lg:w-1/3 block md:float-left"
                            ></Image>

                            <p className="lg:w-2/3 sm:pt-5 md:float-right pl-5 text-lg">
                                {project.description.map((desc) => (
                                    <li key={desc}>{desc}</li>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
