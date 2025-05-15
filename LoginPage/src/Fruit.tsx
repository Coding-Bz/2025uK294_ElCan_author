type Prop = {
 id: string;
 author_name: number;
  birth_date: number;
};

function Fruit({ id, author_name, birth_date}: Prop) {
  function logName() {
    console.log(author_name);
  }

  function handleBuy() {
    alert(`You author was born in ${birth_date} and his/her name is ${author_name}`);
  }

  return (
    <>
    <h4>Author</h4>
     <div>id: {id}</div>
  
        
 <button onClick={logName}>Log Name</button>
     <button onClick={handleBuy} >More Info</button>
    </>
  );
}

export default Fruit;
