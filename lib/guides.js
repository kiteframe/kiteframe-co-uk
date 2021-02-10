import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getGuideBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const guidesDirectory = join(process.cwd(), "guides");
  const fullPath = join(guidesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllGuides() {
  const guidesDirectory = join(process.cwd(), "guides");
  const slugs = fs.readdirSync(guidesDirectory);

  return slugs
    .map((slug) => getGuideBySlug(slug))
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}
