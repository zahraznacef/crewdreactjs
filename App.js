import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
const[movie,setMovie]=useState([])
const getAll = ()=>{
  axios.get('http://localhost:3000/user').then(res =>{
    setMovie(res.data)
  })

}
const [input,setInput]= useState({
  nom:'',
  image:'',
  prix:''
})
const addOne =()=>{
  axios.post('http://localhost:3000/user',input).then(res=>{
    console.log(res.data)
  })
}

const deleteOne =(id)=>{
  axios.delete(`http://localhost:3000/user/${id}`).then(res=>{
    console.log(res.data);
  })
}
useEffect(()=>{
  getAll()
},[])

const del = (id)=>{
  window.location.reload(deleteOne(id))
}

  return (
    <div className="flex flex-wrap">
    {movie.map(el =>(
      <div>
        <h1 className="text-align">{el.nom}</h1>
        <img src={el.image} height={el.dimension} width={el.dimension} alt=""/>
        <h4 className="text-align">{el.prix}</h4>
        <button onClick={()=>del(el.id)}>Delete</button>
      </div>
    ))}
    <form onSubmit={addOne} className="padding">
      <input type='text' placeholder='Nom' onChange={(e)=>setInput({...input,nom:e.target.value})} />
      <input type='text' placeholder='Image' onChange={(e)=>setInput({...input,image:e.target.value})} />
      <input type='text' placeholder='Prix' onChange={(e)=>setInput({...input,prix:e.target.value})} />
      <input type='submit'/>

    </form>

</div>
 
  );
}

export default App;