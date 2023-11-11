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
const SkeletonOftenOrder = (props: SkeletonProps) => (
	<ContentLoader
		speed={2}
		width={300}
		height={200}
		viewBox='0 0 300 200'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='138' y='54' rx='0' ry='0' width='1' height='62' />
		<rect x='4' y='69' rx='15' ry='15' width='270' height='80' />
	</ContentLoader>
)

export default SkeletonOftenOrder
