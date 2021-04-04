import PropTypes, { InferProps } from 'prop-types'

type InferPropTypes<
  PropTypes,
  DefaultProps = Record<string, unknown>,
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
}

export default InferPropTypes
export { InferPropTypes }
