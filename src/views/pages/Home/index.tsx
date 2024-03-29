import { useEffect, useRef, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { InboxOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

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
import getPreviewHtml from 'src/components/Editor/preview';
import SingleAlbumUpload from './SingleAlbumUpload';
import dynamic from 'next/dynamic';

const Steps = dynamic(() => import('intro.js-react').then((mod) => mod.Steps), {
  ssr: false,
}) as any;

const Home = () => {
  const uploadRef = useRef<any>();
  const contentEditorRef = useRef<any>();
  const maxNumber = 1;
  const [images, setImages] = useState([]);
  const [selectedPage, setSelectedPage] = useState('poster');
  const [showIntro, setShowIntro] = useState(true);
  const [content, setContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (imageList, _) => {
    setImages(imageList);
  };

  const steps = [
    {
      element: '#step1',
      intro: 'Tải lên ảnh bìa cho sách của bạn',
      position: 'right',
    },
    {
      element: '#step2',
      intro:
        'Hãy bắt đầu soạn nội dung cho sách. Bạn có thể sử dụng tính năng đồng bộ với WESAPP để tải hình ảnh lên trong quá trình soạn thảo',
      position: 'right',
    },
  ];

  useEffect(() => {
    window.addEventListener(
      'message',
      (event) => {
        if (event.origin !== window.location.origin) return;
        try {
          const data = JSON.parse(event.data);

          if (data.messageType === 'bookEditor') {
            uploadRef.current.open(contentEditorRef.current);
          }
        } catch (error) {}
      },
      false
    );
  }, []);

  return (
    <Layout>
      <Steps
        enabled={showIntro}
        steps={steps}
        initialStep={0}
        onExit={() => setShowIntro(false)}
      />
      <SingleAlbumUpload ref={uploadRef} />
      <Sidebar>
        <PageItem onClick={() => setSelectedPage('poster')} id='step1'>
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
        <PageItem onClick={() => setSelectedPage('content')} id='step2'>
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
              {({ imageList, onImageUpload, onImageUpdate, dragProps }) => (
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
                        chọn kích thước phù hợp. (794x1123)
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
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Upload>
              )}
            </ImageUploading>
          </Content>
        )}

        <div
          style={{
            display: selectedPage === 'content' ? 'flex' : 'none',
            width: '100%',
          }}
        >
          <CustomEditor
            editorName='mainContent'
            setValue={setContent}
            value={content}
            editorRef={contentEditorRef}
          />
        </div>
      </ContentWrapper>
      <Modal
        width={794}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{ padding: 10 }}
      >
        {images.length > 0 && (
          <img
            src={images[0]['data_url']}
            alt='image'
            style={{
              cursor: 'pointer',
              width: '100%',
              height: 1123,
              objectFit: 'cover',
            }}
          />
        )}
        {content && (
          <div
            dangerouslySetInnerHTML={{
              __html: getPreviewHtml(contentEditorRef.current, content),
            }}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default Home;
