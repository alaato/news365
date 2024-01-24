import CardLink from './CardLink';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';


export default function FeaturedPost({sx, article}) {
  const {title, id, category} = article;

  return (
    <Card sx = {sx} >
      <CardCover>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
          loading="lazy"
          alt=""
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
