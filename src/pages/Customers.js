import React, { useState, useEffect } from "react";
import { getAllCustomers } from "../api/api";
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getAllCustomers().then(res => setCustomers(res))
  }, [])

  const tableHeaders = [
    "Name",
    "Phone Number",
    "Address",
    "Email",
    "Role",
    "Status"
  ]
  return (
    <div>
      <section className="flex h-screen bg-gray-50 dark:bg-gray-900 pt-10">
        <div className="w-full lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
              <div>
                <h5 className="mr-3 font-semibold dark:text-white">Customers</h5>
                <p className="text-gray-500 dark:text-gray-400">Manage all your existing customers or add a new one</p>
              </div>
              <button onClick={()=>navigate("/customers/create")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Customer</button>
            </div>
          </div>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">
                    Silver
                  </td>
                  <td class="px-6 py-4">
                    Laptop
                  </td>
                  <td class="px-6 py-4">
                    $2999
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                    White
                  </td>
                  <td class="px-6 py-4">
                    Laptop PC
                  </td>
                  <td class="px-6 py-4">
                    $1999
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    $99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Customers;
