import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  content: string;
}

export function getAllPosts(includePrivate: boolean = false): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description,
        tags: data.tags || [],
        content,
      };
    })
    .filter((post) => {
      // Filter out private posts unless explicitly requested
      if (!includePrivate && post.tags?.includes('private')) {
        return false;
      }
      return true;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents: string;
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
