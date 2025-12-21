import { notFound } from 'next/navigation';
import { getAllPageSlugs, getPageBySlug } from '@/lib/pages';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({
    page: slug,
  }));
}

export default async function DynamicPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageData = getPageBySlug(page);

  if (!pageData) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '100%' }}>
      <MDXRemote source={pageData.content} />
    </div>
  );
}
