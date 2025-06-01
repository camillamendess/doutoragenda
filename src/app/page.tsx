import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex-col flex gap-4  items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
