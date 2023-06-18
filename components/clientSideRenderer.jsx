import dynamic from 'next/dynamic'
import React from 'react'

const ClientSideRenderer = props => (
    <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(ClientSideRenderer), {
    ssr: false
})