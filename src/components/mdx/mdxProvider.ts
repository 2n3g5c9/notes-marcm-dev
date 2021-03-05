declare module '@mdx-js/react' {
  import * as React from 'react'

  type ComponentType = 'h2' | 'inlineCode' | 'p'

  export type Components = {
    [key in ComponentType]?: React.ComponentType<never>
  }

  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
