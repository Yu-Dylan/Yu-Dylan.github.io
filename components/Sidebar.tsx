'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'home', href: '/' },
  { name: 'blog', href: '/blog' },
  { name: 'old', href: '/old' },
];


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ 
      position: 'fixed', 
      left: '280px',
      top: 0, 
      height: '100vh', 
      width: '200px',
      paddingTop: '48px',
      paddingRight: '32px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px',
      textAlign: 'right'
    }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="sidebar-header" style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>navigation:</h1>
        <nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="sidebar-link"
                    style={{ 
                      textDecoration: 'none',
                      fontWeight: isActive ? 'bold' : 'normal',
                      fontSize: '14px',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FA8072'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
        <ThemeToggle />
      </div>
    </aside>
  );
}
