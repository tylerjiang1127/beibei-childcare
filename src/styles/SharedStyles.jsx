import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const ContentCard = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const Subtitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 1.5rem 0;
  font-size: 1.5rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
  }

  @media (max-width: 767px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.8rem;
    padding-left: 1.2rem;
  }
`; 