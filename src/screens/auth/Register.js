import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import { Link } from "react-router-dom";
import backregister from '../../img/back-register.png'
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <div className='content'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Corl | Kayıt Ol </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>KAYIT OL</h2>
              <p className='subText'>Merhaba! Lütfen aşağıdaki bilgileri doldurunuz.</p>

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

                <Link to="/home">
                  <Button
                    style={{ width: 320, marginBottom: 15, marginTop: 25 }}
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
