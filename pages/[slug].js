import {getAllPosts, getPostBySlug} from '../lib/posts';
import markdownToHtml from '../lib/markdown';

export default function Post({meta, content}) {
    return (
        <div className="container mx-auto xl:max-w-3xl">
            <article className="prose max-w-none" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
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