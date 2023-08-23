
//fetch request to the server in the root for the data and console.log it
export const getAllConcerts = async () => {
    const response = await fetch('http://localhost:3000/api/concerts');
    const data = await response.json();
    console.log(data);
    return data;
}

getAllConcerts();