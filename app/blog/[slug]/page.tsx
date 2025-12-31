import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  // Generate static params for all posts (required for output: export)
  const posts = getAllPosts(true);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Check if the post is private and block access
  if (post.tags?.includes('private')) {
    notFound();
  }

  return (
    <article style={{ maxWidth: '900px' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{post.title}</h1>
        <time style={{ fontSize: '0.875rem', color: '#999' }}>
          {formatDate(post.date)}
        </time>
      </header>

      <div>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
