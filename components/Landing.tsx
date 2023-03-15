import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import me from "../public/me.png";

export default function Landing() {
    return (
        <section id="home" className="text-center p-10 pt-28">
            <div className="rounded-full flex">
                <Image
                    src={me}
                    alt="Photo of Prabhu Marappan"
                    className="rounded-full mx-auto"
                ></Image>
            </div>
            <div>
                <p className="text-6xl py-3">Prabhu Marappan</p>
                <p className="text-3xl">Software Engineer</p>
            </div>
            <div className="text-4xl flex justify-center">
                <a
                    href="https://twitter.com/prabhu794/"
                    target="_blank"
                    className="p-5"
                    title="Twitter"
                >
                    <AiFillTwitterCircle title="Twitter" />
                </a>
                <a
                    href="https://www.linkedin.com/in/prabhumarappan/"
                    target="_blank"
                    className="p-5"
                    title="LinkedIn"
                >
                    <AiFillLinkedin title="LinkedIn" />
                </a>
                <a
                    href="https://www.dropbox.com/s/o5gytbvc7mrf3y2/Prabhu_Marappan.pdf?dl=0"
                    target="_blank"
                    className="p-5"
                    title="Resume"
                >
                    <GrDocumentPdf title="Resume" />
                </a>
                <a
                    href="https://github.com/prabhumarappan"
                    target="_blank"
                    className="p-5"
                    title="Github"
                >
                    <FaGithub title="Github" />
                </a>
            </div>
        </section>
    );
}
