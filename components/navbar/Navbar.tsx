import Link from "next/link"

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact'}
]

export const Navbar = () => {
  return (
    <nav><Link href={'/'}>Navbar component</Link>
      {
        navItems.map(navItems => (
          <Link key={navItems.path} href={navItems.path}>{ navItems.text}</Link>
        ))
     }
    </nav>
  )
}
