import * as React from "react"
import { Link } from "gatsby"
import PageLayout from '../components/pagelayout';

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="Page not found" pageLink="home">
      <section>
        <h1>We couldn't find anything here. Not even with X-ray vision!</h1>
        <Link to="/">Click to experience awesomeness!</Link>.
      </section>
    </PageLayout>
  )
}

export default NotFoundPage
