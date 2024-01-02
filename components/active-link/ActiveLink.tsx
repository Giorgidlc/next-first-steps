'use client';

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();
  
  return (
  <Link className={`${styles.navLink} ${ (pathName === path) && styles['active-navLink']}`} href={path}>{text}</Link>
  )
}

