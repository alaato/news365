import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import Opinion from "./Opinion"
import { fetchAllOpinions } from '@/app/utils/fetchData'

export default async function OpinionGrid({opinions}) {
	const allOpinions = opinions;
	if(!allOpinions)
		return(<></>)
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