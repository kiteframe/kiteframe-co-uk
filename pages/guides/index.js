import Layout from "../../components/layout";
import Head from "next/head";
import { getAllGuides } from "../../lib/guides";
import Link from "next/link";
import moment from "moment";

export default function Guides({ guides }) {
  return (
    <Layout>
      <Head>
        <title>Guides | KiteFrame</title>
        <meta
          name="description"
          content="Read the latest published guides from KiteFrame."
        />
      </Head>

      <div className="divide-y-200 mx-auto max-w-3xl divide-y px-4 py-12">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl">
            Guides
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            All of KiteFrame&apos;s hot takes on topics around domain-driven
            design
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {guides.map((guide) => (
            <article
              className="space-y-2 py-12 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
              key={guide.slug}
            >
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500">
                  <time dateTime={guide.meta.date}>
                    {moment(guide.meta.date).format("Do MMMM, YYYY")}
                  </time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-gray-900"
                    >
                      {guide.meta.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500">{guide.meta.description}</p>
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
  const guides = getAllGuides();

  return {
    props: {
      guides,
    },
  };
}
