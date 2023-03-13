export default function About() {
    return (
        <section id="about" className="text-center p-10">
            <h1 className="text-5xl">About Me</h1>
            <div className="py-10 xl:w-2/4 mx-auto">
                <p className="text-xl ">I'm currently doing my Master of Science in Computer Science from Portland State University.</p>
                <br/>
                <p className="text-xl">Before this I worked as a Software Engineer for 5 years in Backend Development, Infrastructure, System Design and Architecture for distributed web applications.</p>
                <br/>
                <p className="text-xl">Engineer looking to solve interesting engineering and data problems.</p>
            </div>
            <div>
                <h1 className="text-5xl pb-10">Skills</h1>
                <p className="text-xl"><b className="font-bold">Languages</b> - Python, Go, Javascript</p>
                <p className="text-xl"><b className="font-bold">Databases</b> - MongoDB, Redis, InfluxDB, MySQL</p>
                <p className="text-xl"><b className="font-bold">Message Queues</b> - ActiveMQ, RabbitMQ, SQS</p>
                <p className="text-xl"><b className="font-bold">Others</b> - AWS, Docker, Git, FluentD, ElasticSearch, Kibana, Microservices</p>
            </div>
        </section>
    );
}
