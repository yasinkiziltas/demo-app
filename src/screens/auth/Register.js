import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import back from '../../img/back.png'

export default function Register() {
  return (
    <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>CORL CORP.</h2>
              <p className='subText'>Tekrar Hoşgeldiniz! Lütfen kayıt olunuz.</p>

              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'grid' }}>
                <Input
                  name="username"
                  style={{ marginBottom: 15 }}
                  placeholder="Kullanıcı Adı"
                />

                <Input
                  name="username"
                  placeholder="Şifre"
                />

                <div style={{ alignItems: 'center' }} className="d-flex flex-column">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="success"
                    outline
                  >Kayıt Ol</Button>

                  
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12} className='imageContainer'>
            <div>
              <img className='img' src={back} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
