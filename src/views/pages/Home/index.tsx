import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { InboxOutlined } from '@ant-design/icons';

import {
  Layout,
  Sidebar,
  PageItem,
  BlankPage,
  PageNumber,
  Content,
  ContentWrapper,
  PreviewButton,
  Upload,
} from './styled';
import { FolderViewOutlined } from '@ant-design/icons';
import CustomEditor from 'src/components/Editor';

const Home = () => {
  const maxNumber = 1;
  const [images, setImages] = useState([]);
  const [selectedPage, setSelectedPage] = useState('poster');
  const [menuValue, setMenuValue] = useState('');
  const [content, setContent] = useState('');

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

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
          <BlankPage active={selectedPage == 'poster'}>
            {images.length > 0 && (
              <img
                src={images[0]['data_url']}
                alt='image'
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </BlankPage>
          <PageNumber>Trang bìa</PageNumber>
        </PageItem>
        <PageItem onClick={() => setSelectedPage('menu')}>
          <BlankPage active={selectedPage == 'menu'}></BlankPage>
          <PageNumber>Phụ lục</PageNumber>
        </PageItem>
        <PageItem onClick={() => setSelectedPage('content')}>
          <BlankPage active={selectedPage == 'content'} />
          <PageNumber>Nội dung sách</PageNumber>
        </PageItem>
      </Sidebar>
      <ContentWrapper>
        {selectedPage === 'poster' && (
          <Content>
            <ImageUploading
              multiple={false}
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey='data_url'
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <Upload>
                  {imageList.length === 0 ? (
                    <div
                      onClick={onImageUpload}
                      {...dragProps}
                      style={{
                        cursor: 'pointer',

                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#fafafa',
                        border: '1px dashed #d9d9d9',
                        padding: 30,
                      }}
                    >
                      <InboxOutlined
                        style={{ fontSize: 55, color: '#40a9ff' }}
                      />

                      <p
                        className='ant-upload-text'
                        style={{
                          marginBottom: 0,
                          marginTop: 20,
                          fontSize: 18,
                          fontWeight: 600,
                        }}
                      >
                        Nhấp hoặc kéo tệp vào khu vực này để tải lên
                      </p>
                      <p className='ant-upload-hint' style={{ marginTop: 0 }}>
                        Ảnh này được dùng làm trang bìa cho sách của bạn hãy
                        chọn kích thước phù hợp.
                      </p>
                    </div>
                  ) : (
                    <img
                      onClick={() => onImageUpdate(0)}
                      src={imageList[0]['data_url']}
                      alt='image'
                      style={{
                        cursor: 'pointer',
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Upload>
              )}
            </ImageUploading>
          </Content>
        )}
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
