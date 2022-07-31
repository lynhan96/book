import React, { useState, useEffect, useImperativeHandle, useRef } from 'react';
import {
  Button,
  Row,
  Col,
  Typography,
  Upload,
  message,
  Divider,
  Spin,
  Form,
  Input,
  Tabs,
} from 'antd';

import {
  FolderAddOutlined,
  DesktopOutlined,
  InboxOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import {
  StyledButton,
  StyledModal,
  Wrapper,
  Left,
  Right,
  AlbumTitleWrapper,
  StyledCard,
  AlbumName,
  ThumbImage,
  ListWrapper,
  ImageWrapper,
} from './styled';
import Media from './Media';
import { foldersQuery, loginQuery, profileQuery } from 'src/data/request';
import { handleMutate } from 'src/data';
import ClinicPatientSelect from '../ClinicPatientSelect';
import { getAuthCredentials, setAuthCredentials } from 'src/data/function';

const { Dragger } = Upload;
const { Text } = Typography;
const { TabPane } = Tabs;

const FALLBACK_DATA =
  'data:image/png;base64,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';

function isImage(contentType) {
  return (
    contentType === 'image/jpeg' ||
    contentType === 'image/png' ||
    contentType === 'image/gif'
  );
}

export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = isImage(file.type);
  if (!isJpgOrPng) {
    message.error('Bạn chỉ có thể tải lên file hình ảnh!');
  }

  return isJpgOrPng;
}

const FileUpload = ({ setValues }) => {
  const handleChange = (info) => {
    if (info.file.status === 'done') {
      setValues([]);

      info.fileList.map((file) => {
        getBase64(file.originFileObj, (url) => {
          setValues((state) => [...state, url]);
        });
      });
    }
  };

  return (
    <Dragger
      style={{ height: 400 }}
      action={`https://api.wesapp.vn/upload`}
      name='upload'
      multiple={true}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>
        Click or drag file to this area to upload
      </p>
      <p className='ant-upload-hint'>
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

const FolderUpload = ({ onFileChange }: any) => {
  const [profile, setProfile] = useState<any>(null);
  const [defaultValue, setDefaultValue] = useState('');
  const { mutate, isLoading } = profileQuery();
  const { mutate: folderMutate } = foldersQuery();
  const { mutate: loginMutate, isLoading: loginLoading } = loginQuery();
  const [selectedAlbum, setSelectedAlbum] = useState<any>();
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [folders, setFolders] = useState([]);

  const onAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const onGetFolders = (patientId: number) => {
    handleMutate(folderMutate, {
      params: {
        clinic_patient_id: patientId,
      },
      onSuccess: ({ data }) => {
        setFolders(data.items);
      },
      onError: (error) => {
        message.error(error?.data?.error);
      },
    });
  };

  const onGetProfile = () => {
    handleMutate(mutate, {
      onSuccess: ({ data, headers }) => {
        setAuthCredentials({
          ...headers,
          role: data.currentRole,
          currentClinicId: data.currentClinicId,
        });
        if (data.user.myClinics.length === 0) {
          message.error(
            'Bạn phải đăng nhập tài khoản chủ phòng khám để thực hiện quá trình kết nối dữ liệu.'
          );
        } else {
          console.log(data);
          setProfile({
            ...data.user,
            currentClinicId: data.currentClinicId,
            currentRole: data.currentRole,
          });
        }
      },
    });
  };

  const onFinish = (values) => {
    handleMutate(loginMutate, {
      params: values,
      onSuccess: ({ data, headers }) => {
        console.log(data);
        setAuthCredentials({
          ...headers,
          role: data.currentRole,
          currentClinicId: data.currentClinicId,
        });
        if (data.user.myClinics.length === 0) {
          message.error(
            'Bạn phải đăng nhập tài khoản chủ phòng khám để thực hiện quá trình kết nối dữ liệu.'
          );
        } else {
          console.log(data);
          setProfile({
            ...data.user,
            currentClinicId: data.currentClinicId,
            currentRole: data.currentRole,
          });
        }
      },
    });
  };

  const onChangeClinic = (clinicId: number) => {
    const currentCookies = getAuthCredentials();
    setAuthCredentials({
      ...currentCookies,
      currentClinicId: clinicId,
    });
    setFolders([]);
    setDefaultValue('');
  };

  useEffect(() => {
    if (folders) {
      if (selectedAlbum) {
        const updatedAlbum = folders.find(
          (album) => album.id === selectedAlbum.id
        );
        setSelectedAlbum({ ...updatedAlbum });
      } else {
        const defaultActiveAlbum = folders[0];
        setSelectedAlbum(defaultActiveAlbum);
      }
    }
  }, [folders]);

  useEffect(() => {
    onFileChange(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    onGetProfile();
  }, []);

  if (!profile)
    return (
      <Spin spinning={isLoading} tip='Đang xác thực...'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 400,
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 10,
              textAlign: 'center',
              flexDirection: 'column',
            }}
          >
            Hãy đăng nhập tài khoản WESAPP của bạn để tải dữ liệu
          </div>
          <Form
            layout='vertical'
            name='basic'
            style={{ width: 400 }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Vui lòng nhập email',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Mật khẩu'
              name='password'
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Row justify='center'>
                <Button type='primary' htmlType='submit' loading={loginLoading}>
                  Đăng nhập
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    );

  return (
    <>
      <Divider type='horizontal' style={{ marginTop: 0, marginBottom: 16 }} />
      <Tabs
        defaultActiveKey={profile.currentClinicId}
        onChange={(key) => onChangeClinic(Number(key))}
      >
        {profile.myClinics.map((clinic) => (
          <TabPane
            tab={
              <span>
                <img src={clinic.logoUrl} />
                {clinic.name}
              </span>
            }
            key={clinic.id}
          />
        ))}
      </Tabs>
      <AlbumTitleWrapper>
        <ClinicPatientSelect
          defaultValue={defaultValue}
          onChange={(value) => onGetFolders(value.id)}
          fieldName='id'
        />
        <Text type='secondary' style={{ fontSize: 14 }}>
          Danh sách Album
        </Text>
      </AlbumTitleWrapper>
      <Wrapper>
        <Left>
          <Row align='middle'>
            {(folders || []).map((album) => (
              <StyledCard
                onClick={() => onAlbumClick(album)}
                $active={selectedAlbum?.id === album.id}
              >
                <Media
                  verticalAlign='center'
                  spacing='md'
                  image={<FolderOutlined style={{ fontSize: 20 }} />}
                >
                  <AlbumName>
                    <Text ellipsis style={{ maxWidth: 120 }}>
                      {album.name}
                    </Text>

                    <Text
                      type='secondary'
                      ellipsis
                      style={{ maxWidth: 120, fontSize: 12 }}
                    >
                      {album.createdAt}
                    </Text>
                  </AlbumName>
                </Media>
              </StyledCard>
            ))}
          </Row>
        </Left>
        <Right>
          {selectedAlbum && (
            <ListWrapper wrap>
              {(selectedAlbum.images || []).map((image) => {
                const isSelected = selectedItem.includes(image.url);
                return (
                  <ImageWrapper key={image.id}>
                    <ThumbImage fallback={FALLBACK_DATA} src={image.url} />
                    <Button
                      type='primary'
                      style={{
                        width: '100%',
                        background: isSelected ? 'green' : '#1890ff',
                        height: 40,
                      }}
                      onClick={() =>
                        setSelectedItem(
                          isSelected
                            ? selectedItem.filter((a) => a !== image.url)
                            : [...selectedItem, image.url]
                        )
                      }
                    >
                      {isSelected ? 'Đã chọn' : `Chọn`}
                    </Button>
                  </ImageWrapper>
                );
              })}
            </ListWrapper>
          )}
        </Right>
      </Wrapper>
    </>
  );
};

const SingleAlbumUpload = ({}: any, ref) => {
  const editorRef = useRef<any>();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('desktop');
  const [values, setValues] = useState([]);

  const onClose = () => {
    setVisible(false);
    editorRef.current = null;
  };

  const onFileChange = (values) => {
    setValues(values);
  };

  const onConfirm = () => {
    values.map((image) => {
      editorRef.current.insertContent(
        `<img src=${image} alt=${image} style="width: 100%"/>`
      );
    });
    onClose();
  };

  useImperativeHandle(ref, () => ({
    open: (editor) => {
      editorRef.current = editor;
      setVisible(true);
    },
  }));

  console.log(values);

  return (
    <StyledModal
      closable={false}
      destroyOnClose={true}
      visible={visible}
      footer={null}
      title='Lựa chọn hình ảnh'
      width={'80%'}
    >
      <Row>
        <Col span={24}>
          <StyledButton
            onClick={() => setType('desktop')}
            type={type === 'desktop' ? 'primary' : 'default'}
            size='large'
            icon={<DesktopOutlined style={{ fontSize: 20 }} />}
          >
            Tải lên từ máy tính
          </StyledButton>
          <StyledButton
            style={{ marginLeft: 20 }}
            type={type === 'album' ? 'primary' : 'default'}
            size='large'
            icon={<FolderAddOutlined style={{ fontSize: 20 }} />}
            onClick={() => setType('album')}
          >
            Tải lên từ Album Wesapp
          </StyledButton>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          {type === 'desktop' ? (
            <FileUpload setValues={setValues} />
          ) : (
            <FolderUpload onFileChange={onFileChange} />
          )}
        </Col>
      </Row>
      <Row align='middle' justify='center' style={{ marginTop: 40 }}>
        {values.length > 0 && (
          <Button
            type='primary'
            size='large'
            onClick={onConfirm}
            style={{ width: 200, marginRight: 20 }}
          >
            Xác nhận
          </Button>
        )}
        <Button size='large' onClick={onClose} style={{ width: 200 }}>
          Đóng
        </Button>
      </Row>
    </StyledModal>
  );
};

export default React.forwardRef(SingleAlbumUpload);
