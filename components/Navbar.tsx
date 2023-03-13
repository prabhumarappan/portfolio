import { BsMoonStarsFill } from "react-icons/bs";


export default function Navbar() {
    return (
        <section className="xl:w-1/3 lg:w-2/4 md:w-4/5 sm:w-4/5 mx-auto">
            {/* TODO: Hide this when sm or xs */}
            <nav>
                <ul className="mb-12 flex mx-auto justify-center bg-cyan-600 rounded-b-lg">
                    <li className="p-5">
                        <a href="/">Home</a>
                    </li>
                    <li className="p-5">
                        <a href="/">About</a>
                    </li>
                    <li className="p-5">
                        <a href="/">Work</a>
                    </li>
                    <li className="p-5">
                        <a href="/">Projects</a>
                    </li>
                    <li className="p-5">
                        <a href="/">Contact</a>
                    </li>
                    <li className="p-5">
                        <BsMoonStarsFill className="text-2xl" />
                    </li>
                </ul>
            </nav>
        </section>
    );
}
