import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardLink from "./CardLink";
import Image from "next/image";
interface article {
	title: string;
	id: string;
	category: string;
}
export default async function Post({ sx, className, article }) {
	const { title, id, category }: article = article;
	//   console.log(article.toObject({ virtuals: true }))
	return (
		<Card sx={sx} className={className}>
			<CardCover>
				<Image
					loading="lazy"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
					quality={50}
					src={article.thumbnail ? article.thumbnail : "/news.jpg"}
					alt={title}
				/>
			</CardCover>
			<CardCover
				sx={{
					background:
						"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
				}}
			/>
			<CardContent sx={{ justifyContent: "flex-end" }}>
				<CardLink
					title={title.substring(0, 50) + (title.length >= 50 ? "..." : "")}
					href={`/news/${category}/${id}`}
				/>
			</CardContent>
		</Card>
	);
}
