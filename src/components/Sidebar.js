import React from 'react';

const Sidebar = ({onSortClick}) => {
  function onSort(e) {
    onSortClick(e.target);
  }
  return (
    <div>
      <p>Filter by:</p>
      <ul>
        <li><a href="#" data-filter-by="alpha" onClick={onSort}>Alphabetically</a></li>
        <li><a href="#" data-filter-by="low" onClick={onSort}>Price: Low to High</a></li>
        <li><a href="#" data-filter-by="high" onClick={onSort}>Price: High to Low</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
