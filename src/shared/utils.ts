const categoryColors: Record<string, string> = {
  'Web / Frontend': 'pink',
}

const categoryBg = (category: string, theme: string): string =>
  `bg-${categoryColors[category]}-${theme === 'dark' ? '800' : '100'}`

const categoryText = (category: string, theme: string): string =>
  `text-${categoryColors[category]}-${theme === 'dark' ? '100' : '800'}`

const copyToClipboard = (str: string): void => {
  navigator.clipboard.writeText(str)
}

export { categoryBg, categoryText, copyToClipboard }
