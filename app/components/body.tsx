"use client";

import RightSide, { RightDetails } from "./rightside";
import LeftSide from "./leftside";
import ChatBox from "./chatbox";

export default function Body({ rightDetails }: { rightDetails: RightDetails }) {
  return (
    <section className=" flex-1 bg-slate-200 rounded-[30px] p-5">
      <section className=" h-full bg-white rounded-[30px] flex flex-row gap-5 p-5">
        <RightSide details={rightDetails} />
        <ChatBox />
        <LeftSide />
      </section>
    </section>
  );
}
