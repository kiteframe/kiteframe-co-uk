import {getAllPosts, getPostBySlug} from '../lib/posts';
import markdownToHtml from '../lib/markdown';
import Layout from "../components/layout";

export default function Post({meta, content}) {
    return (
        <Layout>
            <div className="container mx-auto px-4">
                <article className="prose mx-auto" dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </Layout>
    );
}

export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug);
    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            ...post,
            content
        }
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}