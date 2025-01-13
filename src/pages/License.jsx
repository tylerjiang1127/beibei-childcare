import React from 'react';
import {
  PageContainer,
  ContentCard,
  Title,
  Text,
  List,
  ListItem
} from '../styles/SharedStyles';

function License() {
  return (
    <PageContainer>
      <Title>执照和资质</Title>
      <ContentCard>
        <Text>
          Beibei Child Care 持有麻省政府颁发的所有必要执照和许可，确保为您的孩子提供专业、合规的照护服务。
        </Text>
        <List>
          <ListItem>麻省 EEC (Department of Early Education and Care) 执照</ListItem>
          <ListItem>婴幼儿急救和 CPR 认证</ListItem>
          <ListItem>食品安全认证</ListItem>
          <ListItem>儿童安全培训证书</ListItem>
          <ListItem>专业责任保险</ListItem>
        </List>
        <Text>
          我们严格遵守麻省 EEC 的各项规定和标准，定期接受检查和评估，确保为每一位孩子提供安全、专业的照护环境。
        </Text>
      </ContentCard>
    </PageContainer>
  );
}

export default License; 
