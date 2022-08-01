import React from 'react'

interface ErrorProps {
    error: string
}
function Error ({error}: ErrorProps) {
    return ( 
        <p>{error}</p>
     );
}
 
export default Error;