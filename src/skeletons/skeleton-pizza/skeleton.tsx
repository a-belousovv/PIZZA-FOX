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
const SkeletonPizza = (props: SkeletonProps) => (
	<ContentLoader
		className='skeleton__item'
		speed={2}
		width={275}
		height={468}
		viewBox='0 0 275 468'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='1' y='270' rx='10' ry='10' width='275' height='30' />
		<rect x='1' y='313' rx='10' ry='10' width='275' height='76' />
		<rect x='0' y='405' rx='10' ry='10' width='82' height='35' />
		<rect x='161' y='404' rx='10' ry='10' width='112' height='35' />
		<circle cx='136' cy='142' r='110' />
	</ContentLoader>
)

export default SkeletonPizza
