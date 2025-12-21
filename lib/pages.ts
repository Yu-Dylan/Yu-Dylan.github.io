import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'content/pages');

export interface Page {
  slug: string;
  content: string;
}

export function getPageBySlug(slug: string): Page | null {
  try {
    const fullPath = path.join(pagesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);

    return {
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error reading page ${slug}:`, error);
    return null;
  }
}

export function getAllPageSlugs(): string[] {
  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(pagesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
