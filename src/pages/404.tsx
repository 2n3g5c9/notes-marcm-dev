import React, { ReactElement } from 'react'
import { navigate } from 'gatsby'

import { Layout, SEO } from '@components'
import { ButtonLink } from '@components/atoms'

const NotFoundPage = (): ReactElement => {
  const [counter, setCounter] = React.useState(10)

  React.useEffect(() => {
    if (counter == 0) {
      navigate('/')
    } else {
      setTimeout(() => setCounter(counter - 1), 1000)
    }
  }, [counter])

  return (
    <Layout>
      <SEO title="404: Page not found" />
      <div className="flex flex-col justify-center">
        <div className="sm:flex justify-center my-5 sm:my-12">
          <p className="font-extrabold text-4xl sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="border-accent sm:border-l sm:pl-6">
              <h1 className="font-extrabold text-2xl sm:text-4xl tracking-tight">
                Page not found
              </h1>
              <p className="mt-1 text-secondary text-sm sm:text-base">
                Please check the URL in the address bar and try again.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-0">
          <ButtonLink text={`Going back home in... ${counter}s`} slug="/" />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
