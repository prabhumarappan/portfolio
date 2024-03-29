import Weather from "./Weather";

export default function Navbar() {
    const moveToView = (e: React.MouseEvent<HTMLElement>, ele: string) => {
        e.preventDefault();
        const element = document.getElementById(ele);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section className="xl:w-2/4 lg:w-3/4 md:w-4/5 mx-auto hidden md:block">
            {/* TODO: Hide this when sm or xs */}
            <nav className="fixed top-0 z-20 left-0 right-0 flex mx-auto">
                <ul className="mb-12 flex mx-auto justify-center bg-cyan-600 rounded-b-lg text-2xl">
                    <li className="p-5">
                        <a
                            href="#"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                moveToView(e, "home")
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            href="#"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                moveToView(e, "about")
                            }
                        >
                            About
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            href="#"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                moveToView(e, "projects")
                            }
                        >
                            Projects
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            href="#"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                moveToView(e, "work")
                            }
                        >
                            Work
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            href="#"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                moveToView(e, "contact")
                            }
                        >
                            Contact
                        </a>
                    </li>
                    <li className="p-5">
                        <Weather />
                    </li>
                </ul>
            </nav>
        </section>
    );
}
