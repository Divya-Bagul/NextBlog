'use client'
import styles from '../page.module.css'
import '../styles.css'
import { Accordion, Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Container fluid >
        <Row className={styles.dark}>
          <hr></hr>
        </Row>
        <Row className={`${styles.banner}     text-light`} >
          <Col md={12} lg={6} className='text-center' >
            <img src='../images/me.jpg' className='bgimg-about img-fluid' />
            <p className='px-5 text-start mt-4'>Hello there! I'm Divya Bagul, a passionate and experienced full-stack developer.<br></br> I have a strong foundation in both front-end and back-end development, and I specialize in creating robust and scalable web applications. I believe in crafting elegant and efficient solutions that not only meet client requirements but also provide a seamless user experience</p>
          </Col>
          <Col md={12} lg={5} className=' mt-5'>
            

            <p> I am always eager to explore new technologies and frameworks to enhance my development skills. I believe in writing clean and maintainable code, following industry best practices, and staying up-to-date with the latest trends and advancements in web development.</p>

            <p>If you have a project or idea that you would like to discuss, please feel free to reach out through the contact form or email provided. I would be thrilled to collaborate and help bring your vision to life.</p>
            <button className='btncustom m-2 mb-5' onClick={() => router.push('/contact')}> Contact Now</button>
            <Row>

              <Col lg={3} md={12}>
                <h3>SKills</h3>
                <ul className='ul'>
                  <li > HTML</li>
                  <li > CSS</li>
                  <li >Bootstrap</li>
                  <li > PHP</li>
                  <li > Laravel</li>
                  <li > JavaScript</li>
                  <li > React JS</li>
                  <li > Node JS</li>
                </ul>
              </Col>
              <Col lg={8} md={12}>

                <h3>Experience</h3>
                <Accordion>
                  <Accordion.Item eventKey="0" >
                    <Accordion.Header className={`${styles.dark}`}>2022 - present Full stack developer at WDG</Accordion.Header>
                    <Accordion.Body>
                      Creating SAAS  Base Product on Price monitoring
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2021- 2022 PHP Developer at icreative technologies</Accordion.Header>
                    <Accordion.Body>
                      Develop Shopping Web application In Laravel <br></br>
                      Create Plugins in Shophware 5

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>



          </Col>
          {/* <Col md={6} lg={4} className=''>sm=4</Col> */}
          <Col lg={6}>

          </Col>
        </Row>


      </Container>
    </>
  )
}
