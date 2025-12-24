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
    <aside className="sidebar-container" style={{
      position: 'fixed', 
      left: 'calc(50% - 570px)',
      top: '48px',
      width: '200px',
      paddingRight: '0',
      paddingLeft: '32px',
      fontSize: '14px',
      fontFamily: 'Consolas, monospace',
      textAlign: 'right',
      zIndex: 10
    }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="sidebar-header" style={{ fontWeight: 'bold', margin: '0.67em 0', fontSize: '14px' }}>navigation:</h1>
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
