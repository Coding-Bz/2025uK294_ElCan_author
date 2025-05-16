type Prop = {
  id: number;
  author_name: string;
  birth_date: string;
  onDelete: (id: number) => void;
};

function Fruit({ id, author_name, birth_date, onDelete }: Prop) {
  function logName() {
    console.log(author_name);
  }

  function handleBuy() {
    alert(`Your author was born in ${birth_date} and their name is ${author_name}`);
  }

  return (
    <>
      <h4>Author</h4>
      <div>id: {id}</div>

      <button onClick={logName}>Log Name</button>
      <button onClick={handleBuy}>More Info</button>
     <button onClick={() => onDelete(id)}>Löschen</button>

    </>
  );
}

export default Fruit;
