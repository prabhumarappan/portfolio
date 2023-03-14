import { BsMoonStarsFill } from "react-icons/bs";


export default function Navbar() {
    const moveToView = (e: string) => {
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className="xl:w-2/4 lg:w-3/4 md:w-4/5 sm:w-full mx-auto">
            {/* TODO: Hide this when sm or xs */}
            <nav className="sticky top-0">
                <ul className="mb-12 flex mx-auto justify-center bg-cyan-600 rounded-b-lg text-2xl">
                    <li className="p-5">
                        <a href="/">Home</a>
                    </li>
                    <li className="p-5">
                        <a href="#about">About</a>
                    </li>
                    <li className="p-5">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="p-5">
                        <a href="#work">Work</a>
                    </li>
                    <li className="p-5">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="p-5">
                        <BsMoonStarsFill className="text-2xl" />
                    </li>
                </ul>
            </nav>
        </section>
    );
}
