import React from 'react';
import PropTypes from 'prop-types';

// Reusable TableCell Component
const TableCell = ({ children, className, ...props }) => (
  <td className={`border border-black p-2 ${className}`} {...props}>
    {children}
  </td>
);

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TableCell.defaultProps = {
  className: '',
};

// Reusable TableRow Component
const TableRow = ({ children }) => (
  <tr className="even:bg-gray-100">{children}</tr>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// Reusable Table Component
const Table = ({ headers, data }) => (
  <table className="w-4/5 text-center border-collapse border-2 mx-auto ">
    <thead className="border-b-4 border-primary-Camel bg-gray-200">
      <tr>
        {headers.map((header, idx) => (
          <th key={idx} className=" p-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <TableRow key={idx}>
          {row.map((cell, idx) => (
            <TableCell key={idx}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const Wish = () => {
  const headers = ['Delete', 'Image', 'Product', 'Price', 'Stock Status', 'Add To Cart'];

  const data = [
    [
      <button>Delete</button>,
      <img src="image_url_here" alt="Product" className="w-12 h-12" />,
      'Handbag fringilla',
      '$65.00',
      'In Stock',
      <button className='border-2 py-2 px-3 rounded-lg bg-primary-Camel text-primary-white'>Add to Cart</button>,
    ],
    [
      <button>Delete</button>,
      <img src="image_url_here" alt="Product" className="w-12 h-12" />,
      'Handbag fringilla',
      '$65.00',
      'In Stock',
      <button className='border-2 py-2 px-3 rounded-lg bg-primary-Camel text-primary-white'>Add to Cart</button>,
    ],
    [
      <button>Delete</button>,
      <img src="image_url_here" alt="Product" className="w-12 h-12" />,
      'Handbag fringilla',
      '$65.00',
      'In Stock',
      <button className='border-2 py-2 px-3 rounded-lg bg-primary-Camel text-primary-white'>Add to Cart</button>,
    ],
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Wish;

