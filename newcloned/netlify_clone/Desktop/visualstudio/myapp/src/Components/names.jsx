// import React, { Component } from 'react'
// import MyName from './myname'

// export class Names extends Component {
    
//     render() {
//         const {names,handleChanges , handleClick} = this.props
//         return (
//             <div>
//                 <MyName name={names}
//                     handleChange={handleChanges}
//                     handleClick = {handleClick}
//                 />
                
//             </div>
//         )
//     }
// }

// export default Names
import React from 'react';
import MyName from './myname'
 
const Names = ({names,handleChanges , handleClick}) => {
    return (
        <div>
        <MyName name={names}
        handleChange={handleChanges}
        handleClick = {handleClick}
    />
            
        </div>
    );
}
 
export default Names;

