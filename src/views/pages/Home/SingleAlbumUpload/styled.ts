import styled, { css } from 'styled-components';
import { Button, Modal, Card, Image, Space } from 'antd';

export const StyledModal = styled(Modal)`
  .ant-upload.ant-upload-drag {
    height: 350px;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px dashed #d9d9d9;
  background-color: #fafafa;
  color: rgba(0, 0, 0, 0.85);
  height: 100%;
  cursor: pointer;

  ${({ isList }) =>
    isList &&
    css`
      width: 150px;
      height: 150px;
    `}
`;

export const StyledButton = styled(Button)`
  &.ant-btn-lg {
    height: 40px !important;
    border-radius: 4px !important;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  .ant-image {
    width: 100%;
  }
`;

export const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  box-shadow: 0 2px 8px 0px rgba(200, 205, 208, 0.6);
  border-radius: 50%;
  z-index: 2;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Left = styled.div`
  width: 100%;
`;

export const Right = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const AlbumTitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledCard = styled(Card)`
  && {
    box-shadow: 0 2px 8px 0px rgba(200, 205, 208, 0.34);
    border: solid 2px transparent;

    ${({ $active }) => $active && `border: solid 2px rgba(45, 110, 200, 0.5);`}

    :hover {
      border: solid 2px rgba(45, 110, 200, 0.5);
      cursor: pointer;
    }
    .ant-card-body {
      padding: 12px 6px 12px 18px;
      border-radius: 8px;
    }
  }
`;

export const AlbumName = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

export const ListWrapper = styled(Space)`
  max-height: 600px;
  overflow-y: auto;
  margin-top: 20px;
  width: 100%;
  gap: 10px;

  .ant-space-item {
    width: calc(20% - 20px);
  }

  .ant-image {
    width: 100%;
    height: 100%;
  }
`;
export const ImageListSpace = styled(Space)`
  width: 100%;
  gap: 10px;

  .ant-space-item {
    width: 150px;
  }

  .ant-image {
    width: 100%;
    height: 100%;
  }

  img {
    border: 1px dashed #d9d9d9;
    background: #fafafa;
  }
`;
export const ThumbImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 1500px) {
    height: 150px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #000c17;
`;
