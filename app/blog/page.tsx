import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import BlogClient from './BlogClient';

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
