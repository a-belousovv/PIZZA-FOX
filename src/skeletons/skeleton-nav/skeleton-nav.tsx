import ContentLoader from 'react-content-loader'
interface SkeletonTextProps {
	variant: 'text'
}

interface SkeletonShapeProps {
	variant: 'rect' | 'circle'
	width: number
	height: number
}
type SkeletonProps = SkeletonTextProps | SkeletonShapeProps | any
const SkeletonNav = (props: SkeletonProps) => (
	<ContentLoader
		className='skeleton-nav__item'
		speed={2}
		width={75}
		height={100}
		viewBox='0 0 100 100'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='0' y='30' rx='5' ry='5' width='58' height='25' />
	</ContentLoader>
)

export default SkeletonNav
