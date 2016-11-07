import React from 'react';

const Sidebar = ({onSortClick, orderBy}) => {
  function onSort(e) {
    onSortClick(e.target);
  }
  return (
    <div>
      <p>Filter by:</p>
      <ul>
        <li><a href="#" data-filter-by="alpha" onClick={onSort} className={orderBy === 'alpha' ? 'active' : ''}>Alphabetically</a></li>
        <li><a href="#" data-filter-by="low" onClick={onSort} className={orderBy === 'low' ? 'active' : ''}>Price: Low to High</a></li>
        <li><a href="#" data-filter-by="high" onClick={onSort} className={orderBy === 'high' ? 'active' : ''}>Price: High to Low</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
