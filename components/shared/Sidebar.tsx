'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { navLinks } from '@/constants';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
          <Link href="/" className="sidebar-logo">
            <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
          </Link>

          <nav className="sidebar-nav">
            <SignedIn>
              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={isActive ? 'brightness-200' : ''}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={isActive ? 'brightness-200' : ''}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}

                <li className="flex-center cursor-pointer gap-2 p-4">
                  <UserButton afterSignOutUrl="/" showName />
                </li>
              </ul>
            </SignedIn>

            <SignedOut>
              <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </nav>
        </div>
      </aside>

      {/* styled-jsx for CSS with Tailwind @apply */}
      <style jsx>{`
        .sidebar {
          @apply hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex;
        }

        .sidebar-logo {
          @apply flex items-center gap-2 md:py-2;
        }

        .sidebar-nav {
          @apply h-full flex-col justify-between md:flex md:gap-4;
        }

        .sidebar-nav_elements {
          @apply hidden w-full flex-col items-start gap-2 md:flex;
        }

        .sidebar-nav_element {
          @apply flex justify-center items-center p-4 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-purple-100 hover:shadow-inner;
        }

        .sidebar-link {
          @apply font-semibold flex w-full gap-4 p-4;
        }

        .flex-center {
          @apply flex justify-center items-center;
        }

        .bg-purple-gradient {
          background-image: url('/assets/images/gradient-bg.svg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
