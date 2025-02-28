"use client";

import { Divider, List } from "antd";
import styled from "styled-components";

const data = ["Project A", "Project B", "Project C"];

export default function FavProjectsSideBar() {
  return (
    <div className="flex pr-0 md:pr-2">
      <StyledList
        size="small"
        header={<div>Favorite Projects</div>}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Divider className="h-screen" type="vertical" />
    </div>
  );
}

const StyledList = styled(List)`
  padding: 3rem 1rem;
  white-space: nowrap;

  .ant-list-header,
  .ant-list-item {
    border: none;
    padding: 0.15rem;
  }

  .ant-list-items {
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 1rem;
  }

  .ant-list-item {
    display: list-item;
  }
`;
