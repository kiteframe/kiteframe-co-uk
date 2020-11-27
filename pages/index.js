import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div className="flex container mx-auto px-4 pt-28 pb-36">
                <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Accelerate the development
                        of your PHP-based platform</h1>
                    <span className="text-xl font-normal text-gray-900">We help CTOs build well-architected software that gives them the freedom to confidently adapt their technology strategy to changing business needs.</span>
                </div>

                <div className="w-2/3">
                </div>
            </div>

            <div className="bg-purple-600 pt-28 pb-36">
                <div className="container mx-auto text-white text-center space-y-8">
                    <h2 className="text-4xl font-bold">Product-focussed software engineers</h2>
                    <div className="w-12 h-1 mx-auto bg-white"/>
                    <div className="max-w-xl mx-auto text-center">
                        <span className="text-lg">Partnering with KiteFrame circumvents the months required to grow a team with the architectural, testing and operational expertise demanded by today's complex businesses.</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pt-28 pb-16">
                <div className="container mx-auto px-8 text-gray-900">
                    <div className="max-w-xl mx-auto text-center mb-28">
                        <h2 className="text-4xl text-purple-800 font-bold mb-4">What we do</h2>
                        <p>
                            KiteFrame use a set of practices and principles to build complex internal business systems
                            and user-facing products in a fast yet maintainable way - continuously delivering bug-free
                            code with confidence.
                        </p>
                    </div>

                    <div className="flex flex-wrap -mx-10">
                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">Domain-driven Design</h3>
                                <p>
                                    We believe that to build effective software in complex domains, tight collaboration
                                    is
                                    required between developers and the business. Say goodbye to your business experts
                                    having one context and your developers having another.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">Test-driven development</h3>
                                <p>
                                    In order to achieve to fast flow, it is absolutely essential that the development
                                    team
                                    have access to a suite of fast tests that are able to verify the behaviour of the
                                    system.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">Continuous delivery</h3>
                                <p>
                                    Releasing relatively small increments more often reduces the risk of any one
                                    release,
                                    minimises the business impact of failed experiments and enables the acceleration of
                                    the
                                    development team.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">Devops</h3>
                                <p>
                                    With the tight integration of development, testing, operations and support, teams
                                    become
                                    responsible for the end-to-end delivery of business features, drastically reducing
                                    hand-offs between teams and increasing overall quality.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">PHP</h3>
                                <p>
                                    Having worked extensively with Laravel and Symfony, we have the knowledge and
                                    experience
                                    to dive into new and existing codebases and hit the ground running.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 px-10 text-center mb-20">
                            <div className="px-4">
                                <h3 className="text-2xl text-purple-800 font-medium pb-8">Cloud</h3>
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
        </Layout>
    );
}
