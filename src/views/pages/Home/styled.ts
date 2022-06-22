import { Button } from 'antd';
import styled from 'styled-components';

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
`;

export const PageItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const BlankPage = styled.div`
  display: flex;
  width: 100%;
  background: white;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;

  & > div {
    width: 100%;
  }

  .react-page-cell-inner-leaf {
    font-size: 4px;
    padding: 8px;
  }
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
  padding: 30px 50px;
  padding-top: 40px;
  background: #f5f5f5;
  overflow-y: auto;
  position: relative;

  .react-page-controls-mode-toggle-control-group {
    position: fixed !important;
    right: 0 !important;
    bottom: 40px !important;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin: auto;
  flex-grow: 1;
  max-width: 794px;
  height: 1123px;
  background-color: white;
`;

export const PreviewButton = styled(Button)`
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 999999;
`;
