import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Opinion({text}) {
  return (
    <Card
    sx = {{maxWidth: "320px"}}
      variant="outlined"
    >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
      <CardContent>
        <Typography level="title-lg">NYC Coders</Typography>
        <Typography sx ={{maxWidth : "100%"}}level="body-sm">
          "We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.
          We are a community of developers prepping for coding interviews,
          participate, chat with others and sget better at interviewing."
        </Typography>
      </CardContent>
  
    </Card>
  );
}
