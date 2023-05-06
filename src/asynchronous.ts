interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
  };
  
  const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
  };
  
  getTodoData();

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data = null;
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data')
        }
    })
}

const getPromise = async()=>{
    const result = await makePromise();
    console.log(result);
}

//getPromise();


