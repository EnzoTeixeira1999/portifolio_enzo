import { useEffect } from 'react'

const siteUrl =
  'https://portifolio-enzo-xi.vercel.app'

const defaultImage =
  `${siteUrl}/og-image.png`

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

function getOrCreatePropertyMeta(property) {
  let element = document.querySelector(
    `meta[property="${property}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
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
  image = defaultImage,
  imageAlt = title,
}) {
  useEffect(() => {
    const pageUrl = `${siteUrl}${path}`

    const locale =
      language === 'en'
        ? 'en_US'
        : 'pt_BR'

    document.title = title
    document.documentElement.lang = language

    getOrCreateMeta('description')
      .setAttribute('content', description)

    getOrCreateMeta('robots')
      .setAttribute('content', robots)

    getOrCreateCanonical()
      .setAttribute('href', pageUrl)

    getOrCreatePropertyMeta('og:type')
      .setAttribute('content', 'website')

    getOrCreatePropertyMeta('og:title')
      .setAttribute('content', title)

    getOrCreatePropertyMeta('og:description')
      .setAttribute('content', description)

    getOrCreatePropertyMeta('og:url')
      .setAttribute('content', pageUrl)

    getOrCreatePropertyMeta('og:image')
      .setAttribute('content', image)

    getOrCreatePropertyMeta('og:image:alt')
      .setAttribute('content', imageAlt)

    getOrCreatePropertyMeta('og:locale')
      .setAttribute('content', locale)

    getOrCreateMeta('twitter:card')
      .setAttribute(
        'content',
        'summary_large_image'
      )

    getOrCreateMeta('twitter:title')
      .setAttribute('content', title)

    getOrCreateMeta('twitter:description')
      .setAttribute('content', description)

    getOrCreateMeta('twitter:image')
      .setAttribute('content', image)

    getOrCreateMeta('twitter:image:alt')
      .setAttribute('content', imageAlt)
  }, [
    title,
    description,
    language,
    path,
    robots,
    image,
    imageAlt,
  ])
}

export default usePageSeo