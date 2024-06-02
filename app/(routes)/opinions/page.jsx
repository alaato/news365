import React from 'react'
import AddButton from "@/app/components/opinions/CreateOpinionModal"
import OpinionsGrid from "@/app/components/opinions/opinionGrid"
import PagePagination from "@/app/components/General/PagePagination"
import Opinion from '@/app/models/opinionModel'
import { Suspense } from 'react'
import connect from '@/app/utils/connect'

async function getLimitedOpinions(skip){
	await connect();
	const opinions = await Opinion.find().skip(skip).limit(9).sort({ _id: -1 }).lean({ virtuals: true }).populate("author", "Avatar username")
	opinions.forEach((opinion)=> {
		opinion._id = opinion._id.toString()
		opinion.author= opinion.author?._id?.toString();
	});
	return opinions;
}
const Opinions = async ({ searchParams }) => {
	const { page } = searchParams;
	let skip = !page ? 0 : (page - 1) * 9
	if (skip == -1) { skip = 0; }
	const opinionCount = await Opinion.countDocuments()
	const PageCount = Math.ceil(opinionCount / 10);
	const opinions = await getLimitedOpinions(skip);
	return (
		<>
			<section className='container flex-col'>
				<h1 className='header'>أراء</h1>
				<Suspense fallback={<>loading...</>}>
					<div className='container'>
						<OpinionsGrid opinions={opinions} />
						<AddButton/>
					</div>
				</Suspense>
				<PagePagination page={page} pageCount={PageCount} href={`?page=`} />
			</section>

		</>
	)
}

export default Opinions