export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Button = {
  label: string
  url: string
}

export type ConceptTitle = {
  title: string
}

export type HeaderProps = {
  title: string
  description: string
  button: Button
  image: Image
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

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
  button: Button
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
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

export type SocialLink = {
  title: string
  url: string
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
  sectionAboutUs: SectionAboutProjectProps
  sectionAgenda: SectionAgendaProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionTech: SectionTechProps
}
