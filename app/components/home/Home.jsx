import { Suspense } from 'react'
import NewsGrid from './NewsGrid';
import NewsLine from './NewsLine';
import { NewsGridSkeleton, NewsLineSkeleton } from "../skeleton/skeletons.jsx"
import { getSubCategories } from '@/app/utils/fetchData';
const Home = async () => {
	const subs = await getSubCategories();
	return (
		<>
			<Suspense fallback={<NewsGridSkeleton />}>
				<NewsGrid categories={subs} />
			</Suspense>
			<Suspense fallback={<NewsLineSkeleton />}>
				{subs.map((sub, i) => (
					<NewsLine key={i} title={sub.category} />
				))}
			</Suspense>

		</>
	)
}

export default Home