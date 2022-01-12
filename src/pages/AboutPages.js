import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPages() {
    return (
        <Card>
         <h1>About this Project</h1>
         <p>This is a React app to leave feedback about a product or service </p>
         <p>version:1.0.0</p>
         <p>
             <Link to = '/'>Back To Home</Link>
         </p>
        </Card>
    )
}

export default AboutPages
