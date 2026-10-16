import logo from './logo.svg';
import './App.css';

function Message(props)
{
	return <p>{props.m}</p>
}

function MyList(props)
{
	return <><ul>
		{props.m.map(it=><li>Item: {it.name} costs ${it.price}</li>)}</ul></>
}

function SalesItem(name, price, color)
    {
        this.name = name;
        this.price = price;
        this.color = color;
    }

function App() {
 const itemsArr = "a b c d".split(' ');
	
const itemsArr2 = [new SalesItem('widget' ,10, 'blue'),
				   new SalesItem('gadget' ,13, 'red'),
				   new SalesItem('thing' ,15, 'green')]
	
	return (
    <div>
	<h1>React app</h1>	 
	<MyList m={itemsArr2} />
		
	</div>

  );
}

export default App;
