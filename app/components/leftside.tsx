"use client";

import { Flex, Image, Space, Typography } from "antd";
import TextHelper from "./textHelper";
import FilesShared from "./files";
const { Text } = Typography;

export default function LeftSide() {
  return (
    <section className=" flex-1 bg-white max-w-80 pt-16 overflow-auto no-scrollbar">
      <Flex
        justify="center"
        align="center"
        vertical
        gap="middle"
        className="border-b-2 pb-7">
        <Image
          width={150}
          height={150}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          className="rounded-full "
        />
        <Space direction="vertical" className="-space-y-2">
          <Typography.Text strong className="text-2xl">
            Tamara
          </Typography.Text>
          <Typography.Text className="text-sm text-slate-400 text-center">
            @Tamara_cia
          </Typography.Text>
        </Space>
      </Flex>
      <Flex vertical className="border-b-2 py-4" gap="small">
        <TextHelper title="Phone" body="+234 703 896 8337" />
        <TextHelper title="Description" body="Available" />
        <TextHelper title="Email" body="Tamara@gmail.com" />
      </Flex>
      <Flex vertical className="border-b-2 py-4" gap="small">
        <Flex justify="space-between" align="center">
          <Text strong className=" text-md font-medium text-black">
            Shared File
          </Text>
          <Text strong className=" text-[12px] font-medium text-gray-400">
            640mb
          </Text>
        </Flex>
        <Flex vertical gap={"small"}>
          <FilesShared title="document" body="10" />
          <FilesShared title="images" body="120" />
          <FilesShared title="videos" body="510" />
        </Flex>
      </Flex>
    </section>
  );
}
