import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import { Link } from "react-router-dom";

import backregister from '../../img/back-register.png'

export default function Register() {
  return (
    <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>KAYIT OL</h2>
              <p className='subText'>Merhaba! Lütfen kayıt olunuz.</p>

              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'grid' }}>
                <Input
                  name="username"
                  style={{ marginBottom: 15 }}
                  placeholder="Kullanıcı Adı"
                />

                <Input
                  name="username"
                  placeholder="Şifre"
                  type='password'
                />

                <p className='forgotPass'>Şifrenizi mi unuttunuz?</p>

                <Link to="/home">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="success"
                    outline
                  >Kayıt Ol</Button>
                </Link>

                <Link to="/login">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="primary"
                    outline
                  >Giriş Yap</Button>
                </Link>

              </div>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12} className='imageContainer'>
            <div>
              <img className='img' src={backregister} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
