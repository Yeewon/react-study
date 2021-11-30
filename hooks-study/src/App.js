import useInput from "./hooks/useInput";

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mrs.", maxLen);

  return (
    <div>
      <input placeholder="name" {...name} />
    </div>
  );
}

export default App;
