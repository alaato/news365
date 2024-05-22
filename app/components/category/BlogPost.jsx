import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { OverlayLink } from "./OverlayLink";
import newsImage from "../../../public/news.jpg"
import { CardActions, Button, Stack } from "@mui/joy";
import { getDataFromSession } from "@/app/utils/tokenUtils"
import { cookies } from "next/headers"
import Link from "next/link";
import styles from "@/app/styles/buttons.module.css"
import DeletePostButton from "./DeletePostButton"

export default async function BlogPost({article, href}) {

  const { publishedAt, img, content, title, id } = article;
  const session = cookies().get("session")?.value
  const userData = session? await getDataFromSession(session) : null;
  const isTheAuthor = userData? userData.id === article.author.id: false;

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
        <Image alt = '' src={img? img: newsImage} fill />
      </AspectRatio>
      <Stack>
        <CardContent>
          <Typography level="title-lg" id="card-description">{title}</Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            <OverlayLink content={content} href = {href}/>
          </Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            {publishedAt.toString()}
          </Typography>
        </CardContent>

        {isTheAuthor && <CardActions buttonFlex="0 1 150px">
          <Link className={styles.editButton +' '+ styles.button} href={"/news/posts/edit/"+ article.id}>
          تعديل المنشور
          </Link >
          <DeletePostButton id={id} className={styles.deleteButton + ' '+ styles.button}  >
          </DeletePostButton >
        </CardActions>}
        </Stack>
    </Card>
  );
}
