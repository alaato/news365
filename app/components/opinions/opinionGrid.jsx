import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import Opinion from "./Opinion"
import { fetchAllOpinions } from '@/app/utils/fetchData'

export default async function OpinionGrid() {
	const allOpinions = await fetchAllOpinions();
	if(!allOpinions)
		return(<></>)
	allOpinions.forEach((opinion)=> {
		opinion._id = opinion._id.toString()
		opinion.author._id= opinion.author._id.toString();
	});

	return (
		<Masonry
		sequential
		spacing={1}
		defaultHeight={900}
		defaultColumns={3}
		defaultSpacing={0} columns={{ xs: 1, md: 2, lg:3 }}
		sx={{ width: "auto"}}>
			{allOpinions.map((opinion, index) => {
				return (
				<Opinion key={index} opinion={opinion}>
				</Opinion>
				)
			})}
		</Masonry>
	);
}