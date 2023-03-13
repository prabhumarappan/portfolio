import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import Image from "next/image";

import me from "../public/me.png";

export default function Landing() {
    return (
        <section className="text-center p-10">
            <div className="rounded-full flex py-10 h-3/4">
                <Image src={me} className="rounded-full mx-auto"></Image>
            </div>
            <div>
                <h2 className="text-6xl py-10">Prabhu Marappan</h2>
                <h2 className="text-3xl py-2">Software Engineer</h2>
            </div>
            <div className="text-5xl flex justify-center py-5">
                <a href="https://twitter.com/prabhu794/" target="_blank">
                    <AiFillTwitterCircle className="xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/prabhumarappan/"
                    target="_blank"
                >
                    <AiFillLinkedin />
                </a>
                <a
                    href="https://www.dropbox.com/s/o5gytbvc7mrf3y2/Prabhu_Marappan.pdf?dl=0"
                    target="_blank"
                >
                    <GrDocumentPdf />
                </a>
            </div>
        </section>
    );
}
