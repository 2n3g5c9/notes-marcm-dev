const copyToClipboard = (str: string): void => {
  navigator.clipboard.writeText(str)
}

export { copyToClipboard }
