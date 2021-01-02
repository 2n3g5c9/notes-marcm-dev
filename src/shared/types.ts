// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PropTypes from 'prop-types'

type InferPropTypes<
  PropTypes,
  DefaultProps = Record<string, unknown>,
  Props = PropTypes.InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
}

export default InferPropTypes
export { InferPropTypes }
