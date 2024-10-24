import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "Phone", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },


];

export default function App(){
  return( <div className='app'>
  <Logo/>
  <Form/>
  <PackingList/>
  <State/>
  </div>)}

   function Logo(){
    return <div>
    
      <h1 className="h1">  <div className="logo"></div> win + Far Away</h1>
      
    </div>
   }
function Form(){
function HandelSubmit(e)
{
  e.preventDefault();
}

  return <div className='add-form' onSubmit={HandelSubmit}>
<h3>What do you need for your Trip</h3>
<select>{Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}</select>
<input type='text' placeholder='Item...'/>
<button>Add</button>
  </div>

}
function PackingList(){
  return <div className='list'>
    <ul >
{initialItems.map(item=><Item item={item} key={item.id}/>)}
  </ul>
  </div>
}
function Item({item}){
    return <li><span style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity}{item.description}</span>
    <button>&times;</button>
    </li>
}
function State(){
  return <footer className='stats'><em>You have X items on your list ,and you already packed X (X%)</em></footer>
}