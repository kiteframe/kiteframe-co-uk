import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div className="container flex flex-wrap items-center mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-10 md:pb-16">
                <div className="text-center md:text-left w-full md:w-1/2 mb-10 md:mb-20">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Accelerate the development
                        of your PHP-based platform</h1>
                    <span className="text-lg md:text-xl font-normal text-gray-900">We help CTOs build well-architected software that gives them the freedom to confidently adapt their technology strategy to changing business needs.</span>
                </div>

                <div className="w-full md:w-1/2 flex md:justify-end">
                    <img src="humaaans-graphs.png" alt="Graphic of a person surrounded by chart imagery" className="max-w-sm w-full mx-auto"/>
                </div>
            </div>

            <div className="bg-purple-600 px-4 pt-20 pb-24 md:pt-28 md:pb-36">
                <div className="container mx-auto text-white text-center space-y-6 md:space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold">Product-focussed software engineers</h2>
                    <hr className="w-12 mx-auto border-2 border-white"/>
                    <div className="max-w-xl mx-auto text-center">
                        <span className="md:text-lg">Partnering with KiteFrame circumvents the months required to grow a team with the architectural, testing and operational expertise demanded by today's complex businesses.</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pt-20 md:pt-28 pb-12 md:pb-16">
                <div className="container mx-auto px-8 text-gray-900">
                    <div className="max-w-xl mx-auto text-center mb-20 md:mb-28">
                        <h2 className="text-2xl md:text-4xl text-purple-800 font-bold mb-4">What we do</h2>
                        <p>
                            KiteFrame use a set of practices and principles to build complex internal business systems
                            and user-facing products in a fast yet maintainable way - continuously delivering bug-free
                            code with confidence.
                        </p>
                    </div>

                    <div className="flex flex-wrap md:-mx-10">
                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">Domain-driven Design</h3>
                                <p>
                                    We believe that to build effective software in complex domains, tight collaboration
                                    is
                                    required between developers and the business. Say goodbye to your business experts
                                    having one context and your developers having another.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">Test-driven development</h3>
                                <p>
                                    In order to achieve to fast flow, it is absolutely essential that the development
                                    team
                                    have access to a suite of fast tests that are able to verify the behaviour of the
                                    system.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">Continuous delivery</h3>
                                <p>
                                    Releasing relatively small increments more often reduces the risk of any one
                                    release,
                                    minimises the business impact of failed experiments and enables the acceleration of
                                    the
                                    development team.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">Devops</h3>
                                <p>
                                    With the tight integration of development, testing, operations and support, teams
                                    become
                                    responsible for the end-to-end delivery of business features, drastically reducing
                                    hand-offs between teams and increasing overall quality.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">PHP</h3>
                                <p>
                                    Having worked extensively with Laravel and Symfony, we have the knowledge and
                                    experience
                                    to dive into new and existing codebases and hit the ground running.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
                            <div className="md:px-4">
                                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">Cloud</h3>
                                <p>
                                    With the ever-increasing flexibility offered by public cloud service providers,
                                    businesses no longer have to commit to up-front capital investments. We help our
                                    clients
                                    leverage the power of the cloud, helping them focus on providing business value, not
                                    infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-4 pt-20 md:pt-28 pb-24 md:pb-36">
                <div className="max-w-xl mx-auto text-center mb-16 md:mb-28">
                    <h2 className="text-2xl md:text-4xl text-gray-900 font-bold mb-8">Meet the team</h2>
                    <hr className="w-12 mx-auto border-2 border-gray-900"/>
                </div>

                <div className="flex flex-wrap justify-content md:-mx-10">
                    <div className="w-full md:w-1/3 flex flex-col items-center px-10 text-center mb-14 md:mb-20 space-y-6">
                        <div className="relative">
                            <img src="tim.jpeg" alt="Tim Mortimer" className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"/>
                            <div
                                className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20"/>
                        </div>
                        <span className="text-gray-900 text-xl">Tim Mortimer</span>
                        <a href="https://www.linkedin.com/in/kiteframe-tim-mortimer/" className="w-10">
                            <img src="LI-In-Bug.png" alt="LinkedIn Icon"/>
                        </a>
                        <span className="text-gray-900 text-sm">Founder and software developer</span>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col items-center px-10 text-center mb-14 md:mb-20 space-y-6">
                        <div className="relative">
                            <img src="joe.jpeg" alt="Joe Reed" className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"/>
                            <div
                                className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20"/>
                        </div>
                        <span className="text-gray-900 text-xl">Joe Reed</span>
                        <a href="https://www.linkedin.com/in/joe-reed-44a57592/" className="w-10">
                            <img src="LI-In-Bug.png" alt="LinkedIn Icon"/>
                        </a>
                        <span className="text-gray-900 text-sm">Founder and software developer</span>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col items-center px-10 text-center mb-14 md:mb-20 space-y-6">
                        <div className="relative">
                            <img src="louis.jpeg" alt="Louis Smith" className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"/>
                            <div
                                className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20"/>
                        </div>
                        <span className="text-gray-900 text-xl">Louis Smith</span>
                        <a href="https://www.linkedin.com/in/louis-smith-221a30137/" className="w-10">
                            <img src="LI-In-Bug.png" alt="LinkedIn Icon"/>
                        </a>
                        <span className="text-gray-900 text-sm">Founder and software developer</span>
                    </div>
                </div>
            </div>

            <div className="bg-teal-400 pt-20 md:pt-28 pb-24 md:pb-36">
                <div className="container mx-auto text-white text-center space-y-8 md:space-y-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Testimonials</h2>
                    <hr className="w-12 mx-auto border-2 border-gray-900"/>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl md:text-2xl font-normal text-gray-900 mb-8">
                            "I have had the pleasure of working with KiteFrame and I was really impressed with their
                            professionalism. The software they delivered was thoroughly tested and they were an easy
                            partner to work with."</p>
                        <span className="md:text-lg text-gray-900">Fredrik Mäkilä | Takanoha Limited</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pt-28 pb-16" id="contact-us">
                <div className="container mx-auto px-8 text-gray-900">
                    <div className="max-w-xl mx-auto text-center mb-28">
                        <div className="max-w-xl mx-auto text-center space-y-8 mb-8">
                            <h2 className="text-2xl md:text-4xl text-purple-800 font-bold">Contact us</h2>
                            <hr className="w-12 mx-auto border-2 border-purple-800"/>
                        </div>
                        <p className="text-black-900 md:text-lg mb-8">contact@kiteframe.co.uk</p>
                        <form className="w-3xl" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                            <div className="hidden">
                                <input name="bot-field"/>
                            </div>
                            <div className="flex">
                                <label className="hidden" htmlFor="name">Name</label>
                                <input className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900" type="text" name="name" id="name" placeholder="Name" required/>
                            </div>
                            <div>
                                <label className="hidden" htmlFor="email">Email</label>
                                <input className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900" type="text" name="email" id="email" placeholder="Email" required/>
                            </div>
                            <div>
                                <label className="hidden" htmlFor="subject">Subject</label>
                                <input className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900" type="text" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                            <div>
                                <label className="hidden" htmlFor="message">Message</label>
                                <textarea className="w-full h-32 px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900" name="message" id="message" placeholder="Type your message here..." required/>
                            </div>
                            <div>
                                <button className="w-full px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-medium" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
