const categoryColors: Record<string, string> = {
  'Web / Front-End': 'red',
}

const categoryBg = (category: string, theme: string): string =>
  `bg-${categoryColors[category]}-${theme === 'dark' ? '700' : '50'}`

const categoryText = (category: string, theme: string): string =>
  `text-${categoryColors[category]}-${theme === 'dark' ? '50' : '700'}`

const copyToClipboard = async (str: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(str)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

export { categoryBg, categoryText, copyToClipboard }
