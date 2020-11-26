import Layout from "../../components/layout";
import Head from "next/head";
import {getAllPosts} from "../../lib/posts";
import Link from "next/link";

export default function Guides({posts}) {
    return (
        <Layout>
            <Head>
                <title>Guides</title>
            </Head>

            <div className="max-w-3xl mx-auto px-4 divide-y divide-y-200">
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Guides</h1>
                    <p className="text-lg leading-7 text-gray-500">
                        All of KiteFrame's hot takes on topics around domain-driven design
                    </p>
                </div>

                <div className="divide-y divide-gray-200">
                    { posts.map(post => (
                        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline py-12" key={post.slug}>
                            <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base leading-6 font-medium text-gray-500">
                                    <time dateTime="2020-11-19">November 19, 2020</time>
                                </dd>
                            </dl>
                            <div className="space-y-5 xl:col-span-3">
                                <div className="space-y-6">
                                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                        <Link href={`/guides/${post.slug}`}>
                                            <a className="text-gray-900">{post.meta.title}</a>
                                        </Link>
                                    </h2>
                                    <p className="text-gray-500">{post.meta.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts
        }
    };
}