import Link from "next/link"
import { ActiveLink } from "@/components"

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
          <ActiveLink key={navItems.path} {...navItems} />
        ))
     }
    </nav>
  )
}
