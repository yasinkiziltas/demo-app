import React, { useState, useEffect } from 'react'
import './login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Button } from 'reactstrap'
import GoogleButton from 'react-google-button'
import back from '../../img/back.png'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (userName == 'yasin' && password == '3131') {
      <Link to='/home'></Link>
    }
    else {
      alert('Hatalı giriş!')
    }
  }

  return (
    <div className='content'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Corl | Giriş </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Container fluid>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className='welcomeContainer'>
              <h2>GİRİŞ YAP</h2>
              <p className='subText'>Tekrar Hoşgeldiniz! Lütfen giriş bilgileriniz giriniz.</p>

              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'grid' }}>
                <Input
                  value={userName}
                  name="username"
                  style={{ marginBottom: 15 }}
                  placeholder="Kullanıcı Adı"
                  onChange={(name) => setUserName(name.target.value)}
                />

                <Input
                  value={password}
                  name="username"
                  placeholder="Şifre"
                  type='password'
                  onChange={(pass) => setPassword(pass.target.value)}
                />

                <p className='forgotPass'>Şifrenizi mi unuttunuz?</p>

                <Link to='/home'>
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="success"
                    outline
                  // onClick={() => handleLogin()}
                  >Giriş Yap</Button>
                </Link>

                <Link to="/register">
                  <Button
                    style={{ width: 320, marginBottom: 15 }}
                    color="primary"
                    outline
                  >Kayıt Ol</Button>
                </Link>

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
