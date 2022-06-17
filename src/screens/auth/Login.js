import React from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import GoogleButton from 'react-google-button'
import back from '../../img/back.png'
import { useNavigate } from "react-router-dom";

export default function Login() {
  // let navigate = useNavigate();

  return (
    <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>CORL COMPANY</h2>
              <p className='subText'>Tekrar Hoşgeldiniz! Lütfen giriş bilgileriniz giriniz.</p>

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

                <Button
                  style={{ width: 320, marginBottom: 15 }}
                  color="success"
                  outline
                // onClick={() => navigate("/Register")}
                >Giriş Yap</Button>

                <Button
                  style={{ width: 320, marginBottom: 15 }}
                  color="primary"
                  outline
                >Kayıt Ol</Button>

                <GoogleButton
                  style={{ width: 320, height: 50, }}
                  label='Google ile giriş yap'
                />
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
