interface ImagePlaceHolderProps {
    width: number;
    height: number;
}



export default function PlaceHolder({ width, height }: ImagePlaceHolderProps) {
        return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                <rect x="0" y="0" width={width} height={height} fill="#ccc" />
            </svg>
        );
}