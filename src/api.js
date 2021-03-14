const getProductos = () => {
    try{
        const fetchApi = async () => {
            const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
            const response = await fetch(url);
            const data = await response.json();

            const newData = data.pop();
            console.log(newData);
            return data;
        }
        return fetchApi();
    } catch (error){
        console.log(error);
    }
}

export default getProductos;