import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex items-center flex-col justify-center mt-52">
        <div className="mb-5 capitalize text-xl font-semibold">home page</div>
        <div>
          <Button variant="default">Click</Button>
          <Button variant="destructive">Click</Button>
          <Button variant="ghost">Click</Button>
          <Button variant="link">Click</Button>
          <Button variant="link">Click</Button>
          <Button variant="outline">Click</Button>
          <Button variant="secondary">Click</Button>
        </div>
      </div>
    </>
  );
}

export default App;
