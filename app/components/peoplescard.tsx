"use client";
import { Flex, Image, Space, Typography } from "antd";

export default function PeoplesCard({
  time,
  active,
  item,
  setActive,
}: {
  time: string;
  active: number;
  item: number;
  setActive: (val: number) => void;
}) {
  const { Text } = Typography;
  return (
    <Flex
      onClick={() => setActive(item)}
      justify="space-between"
      gap="small"
      className={
        item === active
          ? " bg-cyan-100 rounded-md px-2 py-3"
          : "px-2 py-3"
      }>
      <Space direction="horizontal" className="gap-2">
        <Image
          width={40}
          height={40}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          className="rounded-full"
        />
        <Space direction="vertical" className=" -space-y-3">
          <Text className=" text-sm font-medium text-black">Natasya Ciel</Text>
          <Text className=" text-[12px] font-light text-gray-400 italic">
            typing...
          </Text>
        </Space>
      </Space>
      <Space direction="vertical" className=" -space-y-2 items-end">
        <Text className=" text-[12px] font-light text-gray-400 italic">
          {time}
        </Text>
        <div className=" w-2 h-2 rounded-full bg-green-400" />
      </Space>
    </Flex>
  );
}
