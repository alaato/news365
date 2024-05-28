import { Suspense } from 'react'
import NewsGrid from './NewsGrid';
import NewsLine from './NewsLine';
import { NewsGridSkeleton, NewsLineSkeleton } from "../skeleton/skeletons.jsx"
import { getCategoriesNames, getSubCategories } from '@/app/utils/fetchData';
const Home = async () => {
	const subs = await getSubCategories();
	const allCategories = await getCategoriesNames();
	return (
		<>
			<Suspense fallback={<NewsGridSkeleton />}>
				<NewsGrid categories={allCategories} />
			</Suspense>
			<Suspense fallback={<NewsLineSkeleton />}>
				{subs.map((sub, i) => (
					<NewsLine key={sub} title={sub.category} />
				))}
			</Suspense>
		</>
	)
}

export default Home