import { useState } from 'react';

import {
  Layout,
  Sidebar,
  PageItem,
  BlankPage,
  PageNumber,
  Content,
  ContentWrapper,
  PreviewButton,
} from './styled';
import { FolderViewOutlined } from '@ant-design/icons';
import CustomEditor from 'src/components/Editor';

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('menu');
  const [menuValue, setMenuValue] = useState('');
  const [content, setContent] = useState('');
  const [posterImage, setPosterImage] = useState('');

  return (
    <Layout>
      <PreviewButton
        shape='round'
        type='danger'
        size='large'
        icon={<FolderViewOutlined />}
      >
        Xem trước
      </PreviewButton>
      <Sidebar>
        <PageItem onClick={() => setSelectedPage('poster')}>
          <BlankPage active={selectedPage == 'poster'} />
          <PageNumber>Trang bìa</PageNumber>
        </PageItem>
        <PageItem onClick={() => setSelectedPage('menu')}>
          <BlankPage active={selectedPage == 'menu'} />
          <PageNumber>Phụ lục</PageNumber>
        </PageItem>
        <PageItem onClick={() => setSelectedPage('content')}>
          <BlankPage active={selectedPage == 'content'} />
          <PageNumber>Nội dung sách</PageNumber>
        </PageItem>
      </Sidebar>
      <ContentWrapper>
        {selectedPage === 'poster' && <Content></Content>}
        {selectedPage === 'menu' && (
          <Content>
            <CustomEditor setValue={setMenuValue} value={menuValue} />
          </Content>
        )}
        {selectedPage === 'content' && (
          <Content>
            <CustomEditor setValue={setContent} value={content} />
          </Content>
        )}
      </ContentWrapper>
    </Layout>
  );
};

export default Home;
