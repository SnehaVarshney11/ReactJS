import React from 'react'

function FragmentDemo() {
    const items = []
  return (
    <React.Fragment>
        <h1> Fragment Demo </h1>
        <p>This describes the Fragment Demo Component</p>
        {
            items.map(items => (
                <React.Fragment key={items.id}>
                    <h1>Title</h1>
                    <p>{items.title}</p>
                </React.Fragment>
            ))
        }
    </React.Fragment>
  )
}

export default FragmentDemo
