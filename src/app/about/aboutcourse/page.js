'use client'
import styles from '../../page.module.css'
import '../../styles.css'
import {Button,Col,Container,Form,Nav,Navbar,NavDropdown, Row} from 'react-bootstrap';
import { useRouter } from "next/navigation";

export default function aboutcourse() {
  const router = useRouter();
  return (
    <>
      <Container fluid >
      <Row className={styles.dark}>
      <hr></hr>

      <section>
    <h1>Projects</h1>

    <div className="container">
      <div className="item" id="1">
        <img src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80" alt="" />
        <div className="text">
          <h3 className='project-title'>PROJECT 1</h3>
          <p>Short Description</p>
        </div>
        <div className="button">Learn More</div>
      </div>

      

     

     

      

    

      
  </div>


  <div id="preview" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <img id="img" src="" />
      <div id="details">
        <h3 id="title"></h3>
        <p id="info">Some text</p>
        <div class="button" id="live">View</div>
          <i class="fab fa-github-square" id="github"></i>
      </div>
    </div>
  </div>
</section>
      </Row>
    
      </Container>
    </>
  ) 
}
