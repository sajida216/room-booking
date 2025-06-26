import React from 'react'

const Searchbar = () => {
    return (
 <div>
<div class="container-fluid container">  
 <form class="d-flex " role="search">
 <input class="form-control form-control-lg me-1  w-25" type="search" placeholder="Place" aria-label="Search"  />
 <input class="form-control form-control-lg me-1 w-25" type="search" placeholder="Name" aria-label="Search" />
 <input class="form-control form-control-lg me-1 w-25" type="search" placeholder="Members" aria-label="Search" />
 <button class="btn btn-outline-success" type="submit">Search</button>
 </form>
 </div>
</div>
    )
}

export default Searchbar
