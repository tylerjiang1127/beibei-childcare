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

function Strength() {
  return (
    <PageContainer>
      <Title>我们的优势</Title>
      <ContentCard>
        <Subtitle>专业的教育团队</Subtitle>
        <List>
          <ListItem>持有麻省EEC颁发的婴幼儿教育执照</ListItem>
          <ListItem>多年幼儿教育经验</ListItem>
          <ListItem>定期参加专业培训和进修</ListItem>
        </List>

        <Subtitle>优质的教育环境</Subtitle>
        <List>
          <ListItem>宽敞明亮的活动空间</ListItem>
          <ListItem>丰富的教具和玩具</ListItem>
          <ListItem>安全的户外活动区域</ListItem>
        </List>

        <Subtitle>特色课程设置</Subtitle>
        <List>
          <ListItem>中英双语教学环境</ListItem>
          <ListItem>音乐、美术、体能多元化活动</ListItem>
          <ListItem>个性化的成长计划</ListItem>
        </List>
      </ContentCard>
    </PageContainer>
  );
}

export default Strength;
