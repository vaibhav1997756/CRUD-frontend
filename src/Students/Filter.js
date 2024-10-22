import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
    return (
        <div className="filter-section">
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className='col-md-4 me-2'>
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                    className="form-control mb-2"
                />
                </div>
                <div className='col-md-4 me-2'>
                <input
                    type="text"
                    placeholder="Search by Email"
                    value={filters.email}
                    onChange={(e) => handleFilterChange('email', e.target.value)}
                    className="form-control mb-2"
                />
                </div>
                <div className='col-md-4 me-2'>
                <input
                    type="text"
                    placeholder="Search by Phone"
                    value={filters.phone}
                    onChange={(e) => handleFilterChange('phone', e.target.value)}
                    className="form-control mb-2"
                />
                </div>
            </div>
        </div>
    );
};

export default Filter;
