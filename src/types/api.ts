export type ConceptTitle = {
  title: string
}

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

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptTitle[]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type LandingPageProps = {
  header: HeaderProps
  logo: LogoProps
  pricingBox: PricingBoxProps
  sectionAboutProject: SectionAboutProjectProps
  sectionAgenda: SectionAgendaProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionTech: SectionTechProps
}
