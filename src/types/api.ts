export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type LandingPageProps = {
  header: HeaderProps
  logo: LogoProps
  sectionAboutProject: SectionAboutProjectProps
}
