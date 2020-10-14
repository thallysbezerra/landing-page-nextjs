import React from 'react'

import Container from 'components/Container'

import { FooterProps } from 'types/api'

import * as S from './styles'

const Footer = ({ text }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <S.Content dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  </S.Wrapper>
)

export default Footer
