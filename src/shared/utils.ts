const copyToClipboard = (str: string): void => {
  navigator.clipboard.writeText(str)
}

export default copyToClipboard
export { copyToClipboard }
