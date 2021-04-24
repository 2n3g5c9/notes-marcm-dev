import React, { ReactElement } from 'react'
import { navigate } from 'gatsby'

import { Layout, SEO } from '@components'
import { NotFoundSVG } from '@assets/images'

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
        <NotFoundSVG className="flex-grow mx-auto my-8 text-primary w-1/2 sm:w-1/3" />
        <div className="flex-grow mx-auto sm:text-lg">
          Taking you back home in... {counter}s
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
