export type Author = {
  description: string
  name: string
  photo: Image
  role: string
  socialLinks: SocialLink[]
}

export type Button = {
  label: string
  url: string
}

export type ConceptTitle = {
  title: string
}

export type HeaderProps = {
  button: Button
  description: string
  image: Image
  title: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type Modules = {
  description: string
  subtitle: string
  title: string
}

export type PricingBoxProps = {
  benefits: string
  button: Button
  numberInstallments: number
  priceInstallment: number
  totalPrice: number
}

export type Question = {
  answer: string
  question: string
}

export type Review = {
  name: string
  photo: {
    url: string
  }
  text: string
}

export type SectionAboutProjectProps = {
  description: string
  image: Image
  title: string
}

export type SectionAboutUsProps = {
  authors: Author[]
  title: string
}

export type SectionAgendaProps = {
  description: string
  title: string
}

export type SectionConceptsProps = {
  concepts: ConceptTitle[]
  title: string
}

export type SectionFaqProps = {
  questions: Question[]
  title: string
}

export type SectionModulesProps = {
  modules: Modules[]
  title: string
}

export type SectionReviewsProps = {
  reviews: Review[]
  title: string
}

export type SectionTechProps = {
  techIcons: TechIcon[]
  title: string
}

export type SocialLink = {
  title: string
  url: string
}

export type TechIcon = {
  icon: {
    url: string
  }
  title: string
}

export type LandingPageProps = {
  header: HeaderProps
  logo: LogoProps
  pricingBox: PricingBoxProps
  sectionAboutProject: SectionAboutProjectProps
  sectionAboutUs: SectionAboutUsProps
  sectionAgenda: SectionAgendaProps
  sectionConcepts: SectionConceptsProps
  sectionFaq: SectionFaqProps
  sectionModules: SectionModulesProps
  sectionReviews: SectionReviewsProps
  sectionTech: SectionTechProps
}
