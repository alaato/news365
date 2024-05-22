import React from "react";
import { Card, CardCover, CardContent } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Skeleton from "@mui/joy/Skeleton";
import Image from "next/image";

export function HeroSkeleton() {
	return (
		<section className="container hero">
			<h2>Loading...</h2>
			<Card className="hero-post">
				
					<AspectRatio maxHeight={200} sx={{ width: "50%" }} >
						<Skeleton>
						</Skeleton>
					</AspectRatio>
			</Card>
		</section>
	);
}

export function BlogPostSkeleton() {
	return (
		<Card
		>
			<AspectRatio maxHeight={200} sx={{ width: "30%" }}>
				<Skeleton></Skeleton>
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
		<section className="container article-list">
			<BlogPostSkeleton />
			<BlogPostSkeleton />
			<BlogPostSkeleton />
			<BlogPostSkeleton />
		</section>
	);
}
export function PostSekeleton({ sx, className }) {
	return (
		<Card sx={sx} className={className}>
			<AspectRatio>
				<Skeleton animation="pulse">
					<CardCover></CardCover>
				</Skeleton>
			</AspectRatio>
		</Card>
	);
}
export function NewsGridSkeleton() {
	return (
		<div className="container">
			<div className="grid">
				<PostSekeleton sx={{ gridArea: "feature" }} />
				<PostSekeleton sx={{ gridArea: "news1" }} />
				<PostSekeleton sx={{ gridArea: "news2" }} />
				<PostSekeleton sx={{ gridArea: "news3" }} />
				<PostSekeleton sx={{ gridArea: "news4" }} />
			</div>
		</div>
	);
}

export function NewsLineSkeleton() {
	return (
		<>
		<div className="container">
			<h2>يتم التحميل...</h2>
			<div className="container newsline">
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
			</div>
		</div>
		<div className="container">
			<h2>يتم التحميل...</h2>
			<div className="container newsline">
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
			</div>
		</div>
		<div className="container">
			<h2>يتم التحميل...</h2>
			<div className="container newsline">
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
			</div>
		</div>
		<div className="container">
			<h2>يتم التحميل...</h2>
			<div className="container newsline">
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
			</div>
		</div>
		<div className="container">
			<h2>يتم التحميل...</h2>
			<div className="container newsline">
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
				<PostSekeleton className={"line-item"} />
			</div>
		</div>
		</>
	);
}
export function MultipleNewsLinesSkeleton() {
	return (
		<div>
			<NewsLineSkeleton />
			<NewsLineSkeleton />
			<NewsLineSkeleton />
			<NewsLineSkeleton />
		</div>
	);
}
