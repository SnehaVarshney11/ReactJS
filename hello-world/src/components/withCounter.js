// THE FILE FOR HOC 
import React from 'react' 

const UpdateComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name='Sneha'/>
        }
    }
    return NewComponent
}

export default UpdateComponent