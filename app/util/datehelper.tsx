import { Typography } from "antd";

const { Text } = Typography;

export default function Datehelper({ date }: { date: string }) {
  return (
    <div className="flex-1 flex-row flex justify-between items-center my-3">
      <div className="flex-1 border-2" />
      <div className="px-6 rounded-full bg-gray-200">
        <Text className=" text-gray-500 text-xs">{date}</Text>
      </div>
      <div className="flex-1 border-2" />
    </div>
  );
}
