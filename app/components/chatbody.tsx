"use client";

import { Empty, Flex, Space } from "antd";
import UserInteractionTextCard from "./userinteractiontextcard";
import Datehelper from "../util/datehelper";

export default function ChatBody({
  data,
}: {
  data: { side: "right" | "left" }[];
}) {
  let response =
    data.length === 0 ? (
      <Flex className="h-[1200px] flex-row justify-center items-center">
        <Empty description={false} className="w-[500px] h-[500px]" />
      </Flex>
    ) : (
      <>
        <Datehelper date="Today" />
        {data.map(({ side }, index) => (
          <UserInteractionTextCard key={index} side={side} />
        ))}
      </>
    );
  return (
    <Space
      direction="vertical"
      className="flex-1 mx-5 gap-5 overflow-y-auto no-scrollbar">
      {response}
    </Space>
  );
}
