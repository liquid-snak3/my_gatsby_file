import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const HomePage = () => { 
    return  (
        <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Dream of adventuring, and getting paid for a living"
        src="C:\Users\Glorf\Pictures\frida.jpg"
        />
        </Layout>
      
    )
}

export const Head = () => <title>Home Page</title>

export default HomePage