import * as React from 'react';
import { Html } from '@react-email/html';
import { Container, Button, Section, Column, Row, Text  } from "@react-email/components";
import { button, container } from '../styles/emailStyles';

export default function Email(props) {
    const { url, username } = props;
  return (
    <Html lang="ar" dir="rtl">
      <Section style={container}>

        <Row>
          <Column>
            <h1 style={{margin: '1rem'}}>{username}, مرحبا</h1>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2 style={{margin: '1rem'}}>شكرا للانظمام </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button style={button} href={url}>
              الرجاء تأكيد الحساب
            </Button>
          </Column>
        </Row>

      </Section>

  </Html>
  );
}
