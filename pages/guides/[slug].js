import { getAllGuides, getGuideBySlug } from "../../lib/guides";
import markdownToHtml from "../../lib/markdown";
import Layout from "../../components/layout";
import Head from "next/head";
import { useEffect } from "react";

export default function Guide({ slug, meta, content }) {
  useEffect(() => {
    window.parent = {
      location: {
        host: "www.kiteframe.co.uk",
        pathname: meta.commentoId,
      },
    };
  });

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <script defer src="https://cdn.commento.io/js/commento.js" />
      </Head>
      <article className="container mx-auto px-4 py-12">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-3 text-center">
            <dl className="space-y-10 text-center">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime="2020-11-19">
                    Thursday 19th November, 2020
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="max-w-3xl mx-auto text-center text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 mb-4">
                {meta.title}
              </h1>
            </div>
            <div>
              <span className="text-base leading-6 font-medium text-gray-500">
                By {meta.author}
              </span>
            </div>
          </div>
        </header>
        <div
          className="prose mx-auto pb-20"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="max-w-3xl mx-auto" id="commento" />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const guide = getGuideBySlug(params.slug);
  const content = await markdownToHtml(guide.content || "");

  return {
    props: {
      ...guide,
      content,
    },
  };
}

export async function getStaticPaths() {
  const guides = getAllGuides();

  return {
    paths: guides.map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
    fallback: false,
  };
}
