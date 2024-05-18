import CardLink from './CardLink';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import newsImage from "@/public/news.jpg"
import Image from 'next/image';

export default function FeaturedPost({sx, classname, article}) {
  const {title, id, category} = article;

  return (
    <Card sx={sx} className = {classname}>
      <CardCover>
        <Image
          src={article.img? article.img : newsImage}
          loading="lazy"
          alt=""
          fill
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent  sx={{ justifyContent: 'flex-end',  color: 'white'}}>
      <CardLink title = {title} href={`/news/${category}/${id}`}/>
      </CardContent>
    </Card>
  );
}
