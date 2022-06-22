import { useState } from 'react';
import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';
import { cellPlugins } from 'plugins/cellPlugins';
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
import { Button } from 'antd';
import {
  PlusOutlined,
  FolderViewOutlined,
  EditOutlined,
} from '@ant-design/icons';

type PageType = {
  page: number;
  content: Value;
};

const defaultPage = {
  page: 1,
  content: {} as Value,
};

const Home = () => {
  const [editMode, setEditMode] = useState(true);
  const [pages, setPages] = useState<PageType[]>([defaultPage]);
  const [selectedPage, setSelectedPage] = useState<PageType>(defaultPage);

  const onPageChange = (value: Value) => {
    setSelectedPage({
      page: selectedPage.page,
      content: value,
    });

    setPages((state) =>
      state.map((page) => {
        if (page.page === selectedPage.page)
          return {
            page: selectedPage.page,
            content: value,
          };

        return page;
      })
    );
  };

  const onAddPage = () => {
    const newPage = {
      page: pages.length + 1,
      content: {} as Value,
    };
    setPages([...pages, newPage]);
    setSelectedPage(newPage);
  };

  return (
    <Layout>
      <PreviewButton
        shape='round'
        type='danger'
        size='large'
        icon={editMode ? <FolderViewOutlined /> : <EditOutlined />}
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? 'Preview Book' : 'Edit Book'}
      </PreviewButton>
      <Sidebar>
        {pages.map((page) => (
          <PageItem
            key={`page-${page.page}`}
            onClick={() => setSelectedPage(page)}
          >
            <BlankPage>
              <Editor cellPlugins={cellPlugins} value={page.content} readOnly />
            </BlankPage>
            <PageNumber>{`Page ${page.page}`}</PageNumber>
          </PageItem>
        ))}
        {editMode && (
          <Button icon={<PlusOutlined />} type='primary' onClick={onAddPage}>
            Add page
          </Button>
        )}
      </Sidebar>
      <ContentWrapper>
        <Content>
          <Editor
            cellPlugins={cellPlugins}
            value={selectedPage.content}
            onChange={(value) => onPageChange(value)}
            readOnly={!editMode}
          />
        </Content>
      </ContentWrapper>
    </Layout>
  );
};

export default Home;
