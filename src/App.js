import logo from './logo.svg';
import {useRef, useState} from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState();
  const updateRef = useRef({})
  const [lists, setLists] = useState([
    {
      id: 1,
      text: 'Learn about React',
      checked: false,
      span: true
    },
    {
      id: 2,
      text: 'Meet friend for lunch',
      checked: false,
      span: true
    },
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLists(prev => {

      const newLists = {
        id: (new Date()).getTime().toString(36),
        text: value,
        checked: false,
        span: true

      }
      const newSetLists = [...prev]
      newSetLists.push(newLists)
      return newSetLists
    })

    setValue('')
  }
  // const handleAdd = (value) =>{
  //   // const newLists = [...lists];
  //   // newLists.push(value)
  //   // console.log(newLists, value);
  //   // setLists(newLists)
  //   // setValue('')
   
  //   setLists(prev => {
  //     const newLists = [...prev, value];
  //     return newLists
  //   })
  //   setValue('')
  // }
  const handleSave = (id) => {
    const checks = lists.map(list => {
      return list.id === id ? 
      { ...list, span: !list.span, text: updateRef.current[id].value} : { ...list};
      })

    setLists(checks)

  }
  const handleUpdate = (id) => {
    const checks = lists.map(list => {
      return list.id === id ? 
      { ...list, span: !list.span } : { ...list};
      })

    setLists(checks)
    
  }
  const handleDelete = (id) => {
   
      const index = lists.findIndex(l => l.id === id)
      const newLists  = [...lists]
      newLists.splice(index, 1)
      // console.log(index)
      setLists(newLists)
      
  }
  const handleCheck = (id) => {
    const checks = lists.map(list => {
      return list.id === id ? 
      { ...list, checked: !list.checked } : { ...list};
    })
    setLists(checks)
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className ="add-text">
        <input 
          type="text" 
          placeholder="What's need to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
        <button type="submit">ADD TASK</button>
        </div>
        </form>
        <ul>
        {lists.map((item) => (
           <li 
              key = {item.id} 
              className="container"
            >
           <input 
              type="checkbox"
              onClick = {() => handleCheck(item.id)}
            />

              { item.span ? 
              <>
                <label 
                  className={item.checked ? "strike" : ""}
                >
                  {item.text}
                </label> 
                <div className = "allbtn">
                  <button 
                    onClick = {() => handleUpdate(item.id)}
                    className="btn"
                  >
                    <span><i className="fa fa-pencil"></i></span>
                  </button>
                 <button
                    onClick = {() => handleDelete(item.id)}
                    className="btn"
                  >
                    <span><i className="fa fa-trash"></i></span>
                  </button>
                </div>
              </>
                :
              <>
              <input 
                type="text"
                defaultValue={item.text}
                ref ={ (element) => updateRef.current[item.id] = element}
               
              />
              <div className = "allbtn">
                <button 
                  onClick = {() => handleSave(item.id)}
                  className="btn"
                >
                  <span><i className="fa fa-bookmark"></i></span>
                </button>
                <button
                  onClick = {() => handleDelete(item.id)}
                  className="btn"
                >
                  <span><i className="fa fa-trash"></i></span>
                </button>
             </div>
            
               </>
              }
             
          
         </li>
        ))}

        </ul>
      
    </div>
  );
}

export default App;
