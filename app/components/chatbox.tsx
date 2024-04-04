"use client";

import { Flex } from "antd";
import ChatHeader from "./chatheader";
import ChatBody from "./chatbody";
import ChatBottom from "./chatBottom";
import { data } from "../constant/chat";

export default function ChatBox() {
  return (
    <Flex
      justify="space-between"
      gap="small"
      className=" flex-1 bg-slate-100 rounded-[50px] pb-6"
      vertical>
      {/* cahat header */}
      <ChatHeader name="Tamara" status="active" />
      {/* chat body */}
      <ChatBody data={data} />
      {/*chat bottom */}
      <ChatBottom />
    </Flex>
  );
}
