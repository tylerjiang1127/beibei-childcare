import React from 'react';
import {
  PageContainer,
  ContentCard,
  Title,
  Subtitle,
  Text,
  List,
  ListItem
} from '../styles/SharedStyles';

function Philosophy() {
  return (
    <PageContainer>
      <Title>办学理念</Title>
      <ContentCard>
        <Text>
          我们致力于为每一个孩子创造安全、温暖、充满爱的学习环境...
        </Text>
        <Subtitle>我们的核心价值观</Subtitle>
        <List>
          <ListItem>关爱每一个孩子的独特性格和发展需求</ListItem>
          <ListItem>注重培养孩子的社交能力和情感发展</ListItem>
          <ListItem>通过游戏和互动促进学习和成长</ListItem>
        </List>
      </ContentCard>
    </PageContainer>
  );
}

export default Philosophy;