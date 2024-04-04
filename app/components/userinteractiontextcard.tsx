"use client";

import { CheckCircleTwoTone } from "@ant-design/icons";
import { Flex, Space, Typography } from "antd";
const { Text } = Typography;

export default function UserInteractionTextCard({
  side,
}: {
  side: "right" | "left";
}) {
  const colors = false ? "#6D6562" : "#5DE2E7";
  return (
    <Space
      direction="vertical"
      className={
        side === "right"
          ? "flex-1 justify-end flex flex-row rounded-md"
          : "flex-1 flex flex-row rounded-md"
      }>
      <Space
        direction="horizontal"
        className={
          side === "right"
            ? " bg-gray-200 p-2 rounded-xl max-w-80 gap-7 relative shadow-sm"
            : " bg-white p-2 rounded-xl max-w-80 gap-7 relative shadow-md"
        }>
        <Text className=" font-normal text-sm">
          Tamara Tamara Tamara Tamara Tamara Tamara Tamara Tamara Tamara Tamara
          Tamara
        </Text>
        <Space direction="horizontal" className=" absolute right-2 bottom-0">
          <Text className=" font-normal text-[8px]">11:43</Text>
          {side === "right" && (
            <CheckCircleTwoTone twoToneColor={colors} className=" text-xs" />
          )}
        </Space>
      </Space>
    </Space>
  );
}
