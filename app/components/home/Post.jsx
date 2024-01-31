import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import CardLink from './CardLink';

export default async function Post({sx, className, article}) {
  const title = "news"
  const category = null;
  const id = null;
  if (article)
    {const {title, id, category} = article}
  return (
    <Card sx = {sx} className = {className} >
      <CardCover>
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/s66fbe0abd6f917b2/image/i9f2bce16815782a9/version/1501696468/image.jpg"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent  sx={{ justifyContent: 'flex-end'}}>
      <CardLink title = {title} href={`/news/${category}/${id}`}/>
      </CardContent>
    </Card>

  );
}
