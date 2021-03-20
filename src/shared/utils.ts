const categoryColors: Record<string, string> = {
  'Web / Frontend': 'red',
}

const categoryBg = (category: string, theme: string): string =>
  `bg-${categoryColors[category]}-${theme === 'dark' ? '700' : '50'}`

const categoryText = (category: string, theme: string): string =>
  `text-${categoryColors[category]}-${theme === 'dark' ? '50' : '700'}`

const copyToClipboard = (str: string): void => {
  navigator.clipboard.writeText(str)
}

export { categoryBg, categoryText, copyToClipboard }
