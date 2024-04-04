"use client";

import { Avatar, Flex, Space, Typography } from "antd";
import { FileFilled } from "@ant-design/icons";
const { Text } = Typography;

export default function FilesShared({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Flex
      onClick={() => console.log("")}
      justify="space-between"
      align="center"
      gap="small"
      className="px-2 py-3">
      <Space direction="horizontal" className="gap-2">
        <Avatar icon={<FileFilled />} />
        <Space direction="vertical" className=" -space-y-4">
          <Text className=" text-sm font-medium text-black">{title}</Text>
          <Text className=" text-[12px] font-light text-gray-400 italic">
            {body}mb
          </Text>
        </Space>
      </Space>
      <Text strong className=" text-[14px] font-bold text-black">
        {">"}
      </Text>
    </Flex>
  );
}
