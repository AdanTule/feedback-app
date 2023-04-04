import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About this Project</h1>
            <p>This is a react app to leave feedback for a project
                or service </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/"> Back to Home</Link>
                </p>
        </div>
    </Card>
  )
}

export default AboutPage