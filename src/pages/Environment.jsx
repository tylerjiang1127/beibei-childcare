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

function Environment() {
  return (
    <PageContainer>
      <Title>教育环境</Title>
      <ContentCard>
        <Subtitle>室内环境</Subtitle>
        <List>
          <ListItem>宽敞明亮的活动区域，采光通风良好</ListItem>
          <ListItem>分区设置：阅读区、游戏区、艺术区、休息区</ListItem>
          <ListItem>配备高品质的教具和玩具</ListItem>
          <ListItem>定期消毒，保持环境清洁卫生</ListItem>
        </List>

        <Subtitle>户外活动</Subtitle>
        <List>
          <ListItem>安全的户外游戏场地</ListItem>
          <ListItem>定期组织户外探索活动</ListItem>
          <ListItem>根据天气情况灵活安排户外时间</ListItem>
        </List>

        <Subtitle>安全措施</Subtitle>
        <List>
          <ListItem>全方位的安全防护设施</ListItem>
          <ListItem>24小时监控系统</ListItem>
          <ListItem>严格的接送制度</ListItem>
        </List>
      </ContentCard>
    </PageContainer>
  );
}

export default Environment;
