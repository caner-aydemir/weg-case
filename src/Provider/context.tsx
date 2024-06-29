"use client";

import React, { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext({});
export const EmployeeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [employees, setEmployees] = React.useState("1");
  const [employeeDetails, setEmployeeDetails] = React.useState([]); 
  const [users, setUsers] = useState([]);
  const Request = async () => {
    try {
      const res = await fetch("/api/getData", {
        method: "POST",
      });
      const dataInfo = await res.json();
      dataInfo.sort((a: any, b: any) => b.vote - a.vote);

      await setUsers(dataInfo);
    } catch (error) {}
  };
  useEffect(() => {
    Request();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        users,
        setUsers,
        employeeDetails,
        setEmployeeDetails,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
