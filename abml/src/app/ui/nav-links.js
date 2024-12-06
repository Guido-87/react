'use client'
import styles from "../page.module.css";
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname();
 
  return (
    <nav className={styles.ctas}>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Listado
      </Link>
      <Link
        className={`link ${pathname === '/detalle' ? 'active' : ''}`}
        href="/detalle"
      >
        Ver Detalle
      </Link>
    </nav>
  )
}