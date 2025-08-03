import { createContext, useState } from "react";

export const ConsumerContext = createContext();

export const ConsumerProvider = ({ children }) => {
  const [consumer, setConsumer] = useState([
    {
      name: "John Smith",
      email: "sarah.j@ihuza.com ",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com ",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },

    {
      name: "Michael Brown",
      email: "m.brown@ihuza.com ",
      role: "Staff",
      status: "Active",
      lastLogin: "1 days ago",
    },

    {
      name: "Emily Davis",
      email: "emilly.d@ihuza.com ",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },

    {
      name: "David Wilson",
      email: "d.wilson@ihuza.com ",
      role: "Staff",
      status: "Active",
      lastLogin: "6 hours ago",
    },

    {
      name: "Lisa Anderson",
      email: "lisa.a@ihuza.com ",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago",
    },

    {
      name: "Robert Taylor",
      email: "r.tylor@ihuza.com ",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago",
    },

    {
      name: "Jennifer Miller",
      email: "j.miller@ihuza.com ",
      role: "Staff",
      status: "Active",
      lastLogin: "4 hours ago",
    },

    {
      name: "Christopher Lee",
      email: "c.lee@ihuza.com ",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
    },

    {
      name: "Amanda White",
      email: "a.white@ihuza.com ",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 hour ago",
    },
  ]);

  return (
    <ConsumerContext.Provider value={{ consumer }}>
      {children}
    </ConsumerContext.Provider>
  );
};
