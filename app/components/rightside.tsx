"use client";
import {
  Flex,
  FloatButton,
  Image,
  Input,
  Space,
  Switch,
  Typography,
} from "antd";
import { getTime } from "./time";
import PeoplesCard from "./peoplescard";
import { MessageOutlined } from "@ant-design/icons";
import { useState } from "react";

export interface RightDetails {
  id: string;
  name: string;
  email: string;
  phonenumber: string;
  status: "active" | "not-active";
  image: string;
}

export default function RightSide({ details }: { details: RightDetails }) {
  const [active, setActive] = useState(1);
  const [labels, setLabels] = useState("Latest");
  const { Text, Paragraph } = Typography;
  let time = getTime();
  function onChange(checked: boolean) {
    console.log(checked);
  }
  const label = ["Latest", "All", "Group"];
  return (
    <Space
      direction="vertical"
      className=" flex-1 bg-white max-w-80 overflow-auto no-scrollbar pt-16">
      <Space direction="horizontal" className="gap-5">
        <Image
          width={80}
          height={80}
          src={details.image}
          alt=""
          className="rounded-full"
        />
        <Space direction="vertical">
          <Space direction="vertical" className=" -space-y-3">
            <Text className=" text-lg font-semibold text-black">
              {details.name}
            </Text>
            <Text className=" text-sm font-medium text-gray-400">
              {details.email}
            </Text>
          </Space>
          <Space direction="horizontal">
            <Switch
              onChange={onChange}
              size="small"
              className={
                details.status === "active"
                  ? " bg-green-400 w-10"
                  : " bg-red-600 w-10"
              }
            />
            <Text>{details.status === "active" ? "Active" : "Not Active"}</Text>
          </Space>
        </Space>
      </Space>
      <Input.Search
        placeholder="Search contacts"
        size="large"
        className=" my-5"
      />
      <Flex className="gap-2 " vertical>
        <Text strong className="text-xl">
          Chats
        </Text>
        <Flex className="gap-12">
          {label.map((item) => (
            <Text
              key={item}
              onClick={() => setLabels(item)}
              className={
                item === labels
                  ? "text-sm font-semibold border-b-2 border-b-cyan-500 text-gray-500"
                  : "text-md text-gray-500"
              }>
              {item}
            </Text>
          ))}
        </Flex>
        <Flex vertical gap="small">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15].map((item) => (
            <PeoplesCard
              key={item}
              time={time}
              active={active}
              item={item}
              setActive={setActive}
            />
          ))}
        </Flex>
      </Flex>
      <FloatButton
        className="bg-blue-200"
        shape="circle"
        type="primary"
        style={{ left: 50 }}
        icon={<MessageOutlined />}
      />
    </Space>
  );
}
