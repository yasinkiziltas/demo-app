import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'

export default function Login() {
  return (
    <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>Tekrar Hoşgeldiniz!</h2>
              <p className='subText'>Tekrar Hoşgeldiniz! Lütfen giriş bilgileriniz giriniz.</p>

              <div>
                <Input
                  name="username"
                  style={{ width: 320, height: 35, marginLeft: 250 }}
                  placeholder="Kullanıcı Adı"
                />

                <Input
                  name="username"
                  style={{ marginTop: 15, width: 320, height: 35, marginLeft: 250 }}
                  placeholder="Şifre"
                />

                <p className='forgotPass'>Şifrenizi mi unuttunuz?</p>

                <div style={{ alignItems: 'center' }} className="d-flex flex-column">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="primary"
                    outline
                  >Giriş Yap</Button>

                  <Button
                    style={{ width: 320 }}
                    color="danger"
                    outline
                  >Kayıt Ol</Button>

                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12}>
            <div className='imageContainer'>
              Buraya background resim gelecek
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
