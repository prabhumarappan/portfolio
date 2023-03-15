export default function ContactMe() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert("Form submitted");
    };
    return (
        <div id="contact" className="lg:max-w-2xl mx-auto">
            <h1 className="text-5xl text-center p-5">Contact Me</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-xl px-8 p-6 m-4"
            >
                <div className="m-6">
                    <label className="block font-bold mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow border rounded w-full py-2 px-2"
                        id="name"
                        name="name"
                        type="text"
                        required
                    />
                </div>
                <div className="m-6">
                    <label className="block font-bold mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow border rounded w-full py-2 px-2"
                        id="email"
                        name="email"
                        type="email"
                        required
                    />
                </div>
                <div className="m-6">
                    <label className="block font-bold mb-1" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow border rounded w-full py-2 px-2 h-40"
                        id="message"
                        name="message"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
