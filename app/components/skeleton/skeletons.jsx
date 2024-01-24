import React from 'react'
import { Card, CardCover, CardContent } from '@mui/joy'
import AspectRatio from '@mui/joy/AspectRatio';
import Skeleton from '@mui/joy/Skeleton';
import Typography from "@mui/joy/Typography";
import Image from "next/image";

export  function HeroSkeleton(){
  return (
    <section className='container hero'>
        <h2>Loading...</h2>
    <Card  className = 'hero-post' >
      <CardCover>
        <AspectRatio>
            <Skeleton>
            <img
          src=''
          alt=""
        />
            </Skeleton>
        </AspectRatio>
        
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
    </Card>
    </section>
  )
}

export  function PostSkeleton() {
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
      <Skeleton>
      <Image alt = ''  fill />
      </Skeleton>
      </AspectRatio>
      <CardContent>
      <Skeleton level="body-title" variant="text" width={50} />
      <Skeleton level="body-sm" variant="text" width={200} />
      <Skeleton level="body-sm" variant="text" width={200} />
      </CardContent>
    </Card>
  );
}

export function BlogGridSkeleton() {

  return (
    <section className='container article-list'>
      <PostSkeleton/>
      <PostSkeleton/>
      <PostSkeleton/>
      <PostSkeleton/>
      </section>

  )
}