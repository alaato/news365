import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { OverlayLink } from "./OverlayLink";

export default function BlogPost({article, href}) {
  const { publishedAt, img, content, title } = article;
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio  maxHeight={200} sx={{ width: "30%",  }}>
        <Image alt = '' src={img} fill />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          {title}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <OverlayLink content={content} href = {href}/>
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          {publishedAt.toString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
