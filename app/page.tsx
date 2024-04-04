import { Empty } from "antd";
import Body from "./components/body";

export default async function Home() {
  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("the data we are expecting is => ", data);
    return (
      <main className="flex h-screen w-screen bg-white p-2">
        <Body rightDetails={data} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <main className="flex h-screen w-screen bg-white p-2 flex-col justify-center items-center">
        <Empty description={false} />
        <p className="text-black text-2xl">
          Error fetching data. Please try again later.
        </p>
      </main>
    );
  }
}
