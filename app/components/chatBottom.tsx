'use client';

import { SmileTwoTone, ThunderboltTwoTone } from "@ant-design/icons";
import { Flex, Input } from "antd";

export default function ChatBottom() {
    
    return (
      <Flex className="mx-5">
        <Input
          placeholder="Message.................."
          prefix={<SmileTwoTone className="text-lg" />}
          suffix={<ThunderboltTwoTone className="text-2xl" />}
          className=" bg-white h-12 rounded-2xl px-4 border-0 shadow-md"
        />
      </Flex>
    );
}