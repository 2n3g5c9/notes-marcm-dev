import React, { ReactElement } from 'react'
import { navigate } from 'gatsby'

import { Layout, SEO } from '@components'

const NotFoundPage = (): ReactElement => {
  const [counter, setCounter] = React.useState(5)

  React.useEffect(() => {
    if (counter == 0) {
      navigate('/')
    } else {
      setTimeout(() => setCounter(counter - 1), 1000)
    }
  }, [counter])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center my-8 sm:my-10 lg:my-12">
          <h1 className="flex-grow font-bold mx-auto text-6xl sm:text-7xl lg:text-8xl">
            404
          </h1>
          <h2 className="flex-grow font-medium mx-auto text-xl sm:text-2xl lg:text-3xl">
            Page Not Found
          </h2>
        </div>
        <div className="flex-grow mx-auto sm:text-lg">
          Taking you back home in... {counter}s
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
