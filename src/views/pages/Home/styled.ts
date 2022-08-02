import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 30px;
  overflow-y: auto;
  background: #333333;
`;

export const PageItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  color: #fff;
`;

export const BlankPage = styled.div`
  display: flex;
  width: 100%;
  background: white;
  height: 200px;
  overflow: hidden;

  & > div {
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 4px 8px 0 rgba(248, 241, 12, 0.2),
        0 6px 20px 0 rgba(248, 241, 12, 0.3);
      border: 4px solid rgba(248, 241, 12);
    `}
`;

export const PageNumber = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  background: #f5f5f5;
  overflow-y: auto;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin: auto;
  flex-grow: 1;
  max-width: 794px;
  height: 100vh;
  background-color: white;
`;

export const PreviewButton = styled(Button)`
  position: fixed;
  left: 230px;
  top: 140px;
  z-index: 999999;
`;

export const Upload = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
