import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Experience {
    id: number;
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
    linkedIn: string;
    img: string;
}

const experiences = [
    {
        id: 1,
        name: "Freshworks",
        position: "Senior Software Engineer",
        startDate: "Jan 2021",
        endDate: "Sep 2021",
        description: "Worked on the Developer Platform Team",
        skills: [
            "Javascript",
            "Node",
            "AWS",
            "Kafka",
            "Prometheus",
            "Grafana",
            "Microservices",
        ],
        linkedIn: "https://www.linkedin.com/company/freshworks-inc/",
        img: "/freshworks.jpeg",
    },
    {
        id: 2,
        name: "Dozee",
        position: "Technical Lead",
        startDate: "Jul 2019",
        endDate: "Dec 2020",
        description: "Lead the Data Processing Team",
        skills: [
            "Python",
            "Docker",
            "AWS",
            "Kibana",
            "Elasticsearch",
            "Go",
            "Distributed Systems",
            "Health Processing Service",
            "REST API",
        ],
        linkedIn: "https://www.linkedin.com/company/dozeehealth/",
        img: "/dozee.jpeg",
    },
    {
        id: 3,
        name: "Infratab",
        position: "Software Developer",
        startDate: "Oct 2018",
        endDate: "Jun 2019",
        description: "Worked on the Cold Storage App Team",
        skills: [
            "Python",
            "Django",
            "Azure",
            "REST API",
            "MySQL",
            "Docker",
            "Ethereum",
            "CircleCi",
            "Cordova",
        ],
        linkedIn: "https://www.linkedin.com/company/infratab-bangalore/",
        img: "/infratab.jpeg",
    },
    {
        id: 4,
        name: "Dozee",
        position: "Software Engineer",
        startDate: "Nov 2016",
        endDate: "Oct 2018",
        description: "Worked on the Data Processing Team",
        skills: [
            "Python",
            "Distributed Systems",
            "Health Processing Service",
            "HTML/CSS",
            "REST API",
        ],
        linkedIn: "https://www.linkedin.com/company/dozeehealth/",
        img: "/dozee.jpeg",
    },
];

export default function Work() {
    return (
        <section id="work" className="text-center p-10 pt-0">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h2 className="text-5xl tracking-tight">
                    Professional Experience
                </h2>
                <div className="pt-5">
                    {experiences.map((experience: Experience) => (
                        <div
                            key={experience.id}
                            className="bg-white rounded-lg shadow-md p-6 mb-6 last:mb-0"
                        >
                            <Link href={experience.linkedIn} target="_blank">
                                <Image
                                    src={experience.img}
                                    alt="hello"
                                    width={50}
                                    height={50}
                                    className="mx-auto"
                                ></Image>
                                <h3 className="text-2xl font-bold mb-3">
                                    {experience.name}
                                </h3>
                            </Link>
                            <p className="mb-2">
                                <strong>{experience.position}</strong>
                            </p>
                            <p className="text-sm mb-2">
                                {experience.startDate} - {experience.endDate}
                            </p>
                            <p>{experience.description}</p>
                            <div className="pt-5">
                                {experience.skills.map((skill: string) => {
                                    return (
                                        <span
                                            key={skill}
                                            className="inline-block bg-gray-200 px-3 py-1 text-sm mr-2 mb-2 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
