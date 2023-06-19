'use client'
import styles from './page.module.css'
import './styles.css'
import {Button,Col,Container,Form,Nav,Navbar,NavDropdown, Row} from 'react-bootstrap';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Container fluid >
      <Row className={styles.dark}>
      <hr></hr>
      </Row>
      <Row className={`${styles.banner} justify-content-center text-center   text-light`} >
      <Col md={12} lg={12} >
        <img src='../images/banner.png' className='bgimg img-fluid' />
      </Col>
      <Col md={12} lg={4} className=''>
      <a href="../images/Divya_Bagul_CV.pdf" download ><button className='btncustom '>  Resume </button></a>
        <button className='btncustom m-2' onClick={()=>router.push('/about')}> About</button>
      </Col>
    
      
      </Row>
      

      </Container>
    </>
  ) 
}
