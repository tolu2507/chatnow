"use client";

import { PhoneFilled, StarTwoTone, VideoCameraFilled } from "@ant-design/icons";
import { Flex, Space, Typography } from "antd";
const { Text } = Typography;

export default function ChatHeader({
  name,
  status,
}: {
  name: string;
  status: string;
}) {
  return (
    <Flex
      justify="space-between"
      className=" bg-gray-300 h-20 rounded-t-[50px] px-8">
      <Space direction="horizontal">
        <Text strong className=" font-semibold text-lg">
          {name}
        </Text>
        <div
          className={
            status === "active"
              ? " w-2 h-2 rounded-full bg-green-400"
              : " w-2 h-2 rounded-full bg-red-600"
          }
        />
      </Space>
      <Flex gap="middle">
        <VideoCameraFilled className=" text-lg text-black" />
        <PhoneFilled className=" text-lg text-black" />
        <StarTwoTone className=" text-lg" />
      </Flex>
    </Flex>
  );
}
