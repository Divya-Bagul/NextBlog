'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

import Link from "next/link";
import styles from './page.module.css'
import './styles.css'

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import 'animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <html lang="en">
     

      <body className={inter.className}>
      <Navbar  expand="lg" className={styles.dark}>
      <Container fluid>
        {/* <Navbar.Brand href="#"><img src="./images/girl.jpg"  height={'50px'}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/"  className="nav-link text-light">Home</Link>
            <Link href="/about"  className="nav-link text-light">About</Link>
            <Link href="/about/aboutcourse"  className=" nav-link text-light">Projects</Link>
            <Link href="/contact"  className=" nav-link text-light">Contact</Link>
            
          
          </Nav>
          
        </Navbar.Collapse>
       
      </Container>
      
    </Navbar> 
  
        {children}</body>
    </html>
  )
}
