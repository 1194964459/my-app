import React from 'react';
// import FixedSizeList from './VariableSizeList'

import FixedSizeList from './FixedSizeList'

const Row = ({ index, style, forwardRef }) => {
    return (
        <div className={index % 2 ? 'list-item-odd' : 'list-item-even'} style={style} ref={forwardRef}>
            {`Row ${index}`}
        </div>
    )
}
// const Row = React.forwardRef(({ index, style }, ref) => {
//     return (
//         <div
//             className={index % 2 ? 'list-item-odd' : 'list-item-even'}
//             style={style}
//             ref={ref}
//         >
//             {`Row ${index}`}
//         </div>
//     );
// });

const VirtualScroll = () => {
    return <FixedSizeList
        className="list"
        height={200}
        width={200}
        itemSize={50}
        itemCount={1000}
    >
        {Row}
        {/* <Row /> */}
    </FixedSizeList>
}


export default VirtualScroll