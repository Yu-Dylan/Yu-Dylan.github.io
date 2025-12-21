import { getPageBySlug } from '@/lib/pages';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Home() {
  const pageData = getPageBySlug('home');

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div style={{ maxWidth: '100%' }}>
      <MDXRemote source={pageData.content} />
    </div>
  );
}
