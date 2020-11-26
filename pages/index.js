import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div className="flex container mx-auto px-4 pt-28 pb-36">
                <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Accelerate the development of your PHP-based platform</h1>
                    <span className="text-xl font-normal text-gray-5=900">We help CTOs build well-architected software that gives them the freedom to confidently adapt their technology strategy to changing business needs.</span>
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
        </Layout>
    );
}
