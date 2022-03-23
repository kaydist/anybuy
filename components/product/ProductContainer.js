import React, { useState, useEffect } from 'react'

//component
import Product from './product'
import ReactPaginate from "react-paginate"
import styled from 'styled-components';


function Items({currentItems}) {
    return(
        <>
            {   
                currentItems.map((product, idx) => {
                    return(    
                        <Product 
                        key={product.id}
                        product={product}
                        />
                    )
                })
            }
        </>
    )
}

function PaginatedItems({ itemsPerPage, category }) {

      
    const StyledLink = styled.div`
    ul{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.8rem;
        font-weight: 800;
        margin: 1.5rem 0
    }

    ul .active{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        color: white;
        background: #ff6915;
        border-radius: 9999px
    }
    `;

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // Here we use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(category.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(category.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, category]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % category.length;
      setItemOffset(newOffset);      
      setCurrentPage(Math.round(event.selected))
    };
  
    return (
      <>
        <section className="grid grid-flow-row lg:grid-cols-4 grid-cols-auto-fill gap-10 w-full overflow-hidden">            
            <Items currentItems={currentItems} />               
        </section>

        <StyledLink>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event)=>{handlePageClick(event)}}
            // pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
            activeClassName="active"
            />
        </StyledLink> 
      </>
    );
  }

  function ProductContainer({category}) {
    return (
        <>
          <PaginatedItems category={category} itemsPerPage={12} />
        </>
    )
}

export default ProductContainer
