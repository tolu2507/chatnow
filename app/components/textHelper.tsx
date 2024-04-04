import { Space, Typography } from "antd";
const { Text } = Typography;

export default function TextHelper({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Space direction="vertical" className=" -space-y-4">
      <Text className=" text-[12px] font-medium text-black">{title}</Text>
      <Text className=" text-[12px] font-medium text-gray-400">{body}</Text>
    </Space>
  );
}
