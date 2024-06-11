import { getAllPosts, getPostBySlug } from "../../lib/posts";
import markdownToHtml from "../../lib/markdown";
import Layout from "../../components/layout";
import Head from "next/head";
import moment from "moment";

export default function Post({ meta, content }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <article className="container mx-auto px-4 py-12">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-3 text-center">
            <dl className="space-y-10 text-center">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500">
                  <time dateTime={meta.date}>
                    {moment(meta.date).format("dddd Do MMMM, YYYY")}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="md:leading-14 mx-auto mb-4 max-w-3xl text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
                {meta.title}
              </h1>
            </div>
            <div>
              <span className="text-base font-medium leading-6 text-gray-500">
                By {meta.author}
              </span>
            </div>
          </div>
        </header>
        <div
          className="prose mx-auto pb-20"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
