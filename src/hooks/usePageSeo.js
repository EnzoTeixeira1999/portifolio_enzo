import { useEffect } from 'react'

const siteUrl =
  'https://portifolio-enzo-xi.vercel.app'

function getOrCreateMeta(name) {
  let element = document.querySelector(
    `meta[name="${name}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }

  return element
}

function getOrCreateCanonical() {
  let element = document.querySelector(
    'link[rel="canonical"]'
  )

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  return element
}

function usePageSeo({
  title,
  description,
  language,
  path,
  robots = 'index, follow, max-image-preview:large',
}) {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = language

    getOrCreateMeta('description')
      .setAttribute('content', description)

    getOrCreateMeta('robots')
      .setAttribute('content', robots)

    getOrCreateCanonical()
      .setAttribute('href', `${siteUrl}${path}`)
  }, [
    title,
    description,
    language,
    path,
    robots,
  ])
}

export default usePageSeo