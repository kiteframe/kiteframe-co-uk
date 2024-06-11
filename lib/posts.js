import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY_NAME = "posts";

export function getPostBySlug(slug) {
  const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME);
  const fileNames = fs.readdirSync(postsDirectory);
  const fileNameMatchingSlug = fileNames.find((fileName) =>
    fileName.includes(slug),
  );
  const fullPath = join(postsDirectory, fileNameMatchingSlug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: slug, meta: data, content };
}

export function getAllPosts() {
  const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME);
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .reverse()
    .map((fileName) => fileName.slice(11, -3))
    .map((slug) => getPostBySlug(slug));
}
