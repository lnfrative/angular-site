import { MetaDefinition } from "@angular/platform-browser";

interface Metadata {
  landing: MetaDefinition[]
}

const metadata: Metadata = {
  landing: [
    {
      name: 'title',
      content: 'DogeCash – Where crypto and cash meet'
    },
    {
      name: 'description',
      content: 'Generate, receive, spend and manage crypto like never before.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://dogecash.net'
    },
    {
      property: 'og:title',
      content: 'DogeCash – Where crypto and cash meet',
    },
    {
      property: 'og:description',
      content: 'Generate, receive, spend and manage crypto like never before.',
    },
    {
      property: 'og:image',
      content: 'https://dogecash.net/assets/images/meta/home.jpeg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'DogeCash – Where crypto and cash meet',
    },
    {
      name: 'twitter:description',
      content: 'Generate, receive, spend and manage crypto like never before.',
    },
    {
      name: 'twitter:image',
      content: 'https://dogecash.net/assets/images/meta/home.jpeg'
    },
  ]
}

export default metadata
