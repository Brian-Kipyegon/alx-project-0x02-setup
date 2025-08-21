import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 text-sm">
        {user.address.street}, {user.address.suite}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
