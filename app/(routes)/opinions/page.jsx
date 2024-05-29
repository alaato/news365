import React from 'react'
import AddButton from "@/app/components/opinions/CreateOpinionModal"
import OpinionsGrid from "@/app/components/opinions/opinionGrid"
import PagePagination from "@/app/components/General/PagePagination"
import Opinion from '@/app/models/opinionModel'
import { getDataFromSession } from '@/app/utils/tokenUtils'
import { Suspense } from 'react'
const Opinions = async ({ searchParams }) => {
	const { page } = searchParams;
	const userData = await getDataFromSession();
	const id = userData ? userData.id : null;
	let skip = !page ? 0 : (page - 1) * 9
	if (skip == -1) { skip = 0; }
	const opinions = await Opinion.find().skip(skip).limit(9).sort({ id: -1 }).lean({ virtuals: true }).populate("author", "Avatar username")
	const opinionCount = await Opinion.countDocuments()
	console.log(opinionCount)
	const PageCount = Math.ceil(opinionCount / 10);
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