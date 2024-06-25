export const FetchProduct = async()=>{
    const product = await fetch('https://fakestoreapi.com/products',{
        method:'GET'
    });
    return product.json();
}