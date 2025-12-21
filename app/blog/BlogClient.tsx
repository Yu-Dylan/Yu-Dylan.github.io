'use client';

import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { useState, useMemo, useEffect } from 'react';
import type { Post } from '@/lib/blog';

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      setIsDark(hasDarkClass);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter(post => post.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Blog</h1>
      
      {allTags.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedTag(null)}
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.875rem',
                border: isDark ? '1px solid #e5e5e5' : '1px solid black',
                backgroundColor: !selectedTag ? '#FA8072' : (isDark ? '#1a1a1a' : 'white'),
                color: isDark ? '#e5e5e5' : 'black',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              all
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.875rem',
                  border: isDark ? '1px solid #e5e5e5' : '1px solid black',
                  backgroundColor: selectedTag === tag ? '#FA8072' : (isDark ? '#1a1a1a' : 'white'),
                  color: isDark ? '#e5e5e5' : 'black',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {filteredPosts.map((post) => (
          <article key={post.slug} style={{ borderBottom: isDark ? '1px solid #e5e5e5' : '1px solid #333', paddingBottom: '2rem' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {post.title}
              </h2>
            </Link>
            <time style={{ fontSize: '0.875rem', color: isDark ? '#999' : '#666' }}>
              {formatDate(post.date)}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.125rem 0.5rem',
                      backgroundColor: isDark ? '#2a2a2a' : '#f5f5f5',
                      borderRadius: '4px',
                      color: isDark ? '#999' : '#666'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {post.description && (
              <p style={{ marginTop: '0.75rem', lineHeight: '1.6' }}>
                {post.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
