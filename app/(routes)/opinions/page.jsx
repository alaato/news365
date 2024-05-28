import React from 'react'
import AddButton from "@/app/components/opinions/CreateOpinionModal"
import OpinionsGrid from "@/app/components/opinions/opinionGrid"

const Opinions = async () => {
	return (
		<>
			<section className='container flex-col'>
				<h1 className='header'>أراء</h1>
				<div className='container'>
					<OpinionsGrid></OpinionsGrid>
					<AddButton></AddButton>
				</div>
			</section>

		</>
	)
}

export default Opinions