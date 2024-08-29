import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [ products, setProducts ] = useState([])
  const [ page, setPage ] = useState(1)
  const currentPageProducts = products.slice(page * 10 - 10, page * 10)

  const fetchProducts = async () => {
    const result = await fetch("https://dummyjson.com/product")
    const data = await result.json()

    if(data && data.products) {
      setProducts(data.products)
      console.log(data.products)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectedPageHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
    setPage(selectedPage)
  }

  return (
    <div>
      <div className="App">
        {
          currentPageProducts && currentPageProducts.length > 0 && (
            currentPageProducts.map(product => {
              return (
                <span key={product.id} className="product">
                  <img src={product.thumbnail} />
                  <span>{product.title}</span>
                </span>
              )
            })
          )
        }
        </div>
        {
          products.length > 0 &&
            <div className='pagination'>
              <span
              className={page > 1 ? "" : "paginationDisabled"}
              onClick={() => selectedPageHandler(page - 1)}>◀</span>
              {
                [...Array(products.length / 10)].map((_, i) => {
                  return (
                    <span
                    className={page === i + 1 ? "paginationSelected" : ""}
                    onClick={() => selectedPageHandler(i + 1)}>{i + 1}</span>
                  )
                })
              }
              <span
              className={page < products.length / 10 ? "" : "paginationDisabled"}
              onClick={() => selectedPageHandler(page + 1)}>▶</span>
            </div>
        }
      
    </div>
  )
}

export default App;
