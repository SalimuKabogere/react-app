import ListGroup from "./components/ListGroup";

// PascalCasing
function App() {
  let items = ["Kampala", "New York", "Tokyo", "Nairobi"];
  const handleSelectItem=(item:string):void=>{
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}
export default App;
