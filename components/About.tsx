const skills = [
    "Python",
    "Go",
    "Javascript",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "InfluxDB",
    "Redis",
    "MySQL",
    "ActiveMQ",
    "RabbitMQ",
    "SQS",
    "Amazon Web Services",
    "Google Cloud Platform",
    "Docker",
    "Git",
    "FluentD",
    "Kibana",
    "Elasticsearch",
    "Microservices",
    "Django",
    "Flask",
    "React",
    "NextJS",
    "NodeJS",
    "FastAPI",
    "GraphQL",
    "OAuth",
];

export default function About() {
    return (
        <section id="about" className="text-center">
            <div className="py-10 xl:w-2/4 mx-auto">
                <h1 className="text-5xl">About Me</h1>
                <p className="text-xl pt-10">
                    I`&apos;`m currently doing my Master of Science in Computer
                    Science from Portland State University.
                </p>
                <br />
                <p className="text-xl">
                    Before this I worked as a Software Engineer for 5 years in
                    Backend Development, Infrastructure, System Design and
                    Architecture for distributed web applications.
                </p>
                <br />
                <p className="text-xl">
                    Engineer looking to solve interesting engineering and data
                    problems.
                </p>
            </div>
            <div className="py-10 xl:w-2/3 mx-auto">
                <h1 className="text-5xl">Skills</h1>
                <ul className="py-10 pb-0 mx-auto flex flex-wrap">
                    <li className="p-4 m-2 bg-cyan-400 rounded-xl">Python</li>
                    {skills.map((skill) => (
                        <li className="p-4 m-2 bg-cyan-400 rounded-xl">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
