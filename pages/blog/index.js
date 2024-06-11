import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import Link from "next/link";
import moment from "moment";

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts | KiteFrame</title>
        <meta
          name="description"
          content="Read the latest published posts from KiteFrame."
        />
      </Head>

      <div className="divide-y-200 mx-auto max-w-3xl divide-y px-4 py-12">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            Read our latest pieces on improving software delivery performance
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {posts.map((post) => (
            <article
              className="space-y-2 py-12 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
              key={post.slug}
            >
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500">
                  <time dateTime={post.meta.date}>
                    {moment(post.meta.date).format("Do MMMM, YYYY")}
                  </time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${post.slug}`} className="text-gray-900">
                      {post.meta.title}
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
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
