const GET_LANDING_PAGE = /* GraphQL */ `
  fragment header on LandingPage {
    header {
      button {
        label
        url
      }
      description
      image {
        alternativeText
        url
      }
      title
    }
  }

  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      benefits
      button {
        label
        url
      }
      numberInstallments
      priceInstallment
      totalPrice
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      description
      image {
        alternativeText
        url
      }
      title
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      authors {
        description
        name
        photo {
          alternativeText
          url
        }
        role
        socialLinks {
          title
          url
        }
      }
      title
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      description
      title
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      concepts {
        title
      }
      title
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      modules {
        description
        subtitle
        title
      }
      title
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      reviews {
        name
        photo {
          url
        }
        text
      }
      title
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      techIcons {
        icon {
          url
        }
        title
      }
      title
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...header
      ...logo
      ...pricingBox
      ...sectionAboutProject
      ...sectionAboutUs
      ...sectionAgenda
      ...sectionConcepts
      ...sectionModules
      ...sectionReviews
      ...sectionTech
    }
  }
`

export default GET_LANDING_PAGE
