import React from "react";

function Customers() {
  const customers = [
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St, Anytown USA",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      phoneNumber: "555-555-1212",
      address: "456 Elm St, Anytown USA",
      email: "jane.smith@example.com",
    },
    {
      name: "Bob Johnson",
      phoneNumber: "987-654-3210",
      address: "789 Oak St, Anytown USA",
      email: "bob.johnson@example.com",
    },
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St, Anytown USA",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      phoneNumber: "555-555-1212",
      address: "456 Elm St, Anytown USA",
      email: "jane.smith@example.com",
    },
    {
      name: "Bob Johnson",
      phoneNumber: "987-654-3210",
      address: "789 Oak St, Anytown USA",
      email: "bob.johnson@example.com",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-8">Customers</h2>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.phoneNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.email}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
