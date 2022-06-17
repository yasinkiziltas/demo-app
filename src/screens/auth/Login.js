import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import GoogleButton from 'react-google-button'
import back from '../../img/back.png'

export default function Login() {
  return (
    <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>CORL CORP.</h2>
              <p className='subText'>Tekrar Hoşgeldiniz! Lütfen giriş bilgileriniz giriniz.</p>

              <div>
                <Input
                  name="username"
                  style={{ width: 320, height: 35, marginLeft: 350 }}
                  placeholder="Kullanıcı Adı"
                />

                <Input
                  name="username"
                  style={{ marginTop: 15, width: 320, height: 35, marginLeft: 350 }}
                  placeholder="Şifre"
                />

                <p className='forgotPass'>Şifrenizi mi unuttunuz?</p>

                <div style={{ alignItems: 'center' }} className="d-flex flex-column">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="success"
                    outline
                  >Giriş Yap</Button>

                  <GoogleButton
                    style={{ width: 320, height: 50, }}
                    label='Google ile giriş yap'
                  />
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
