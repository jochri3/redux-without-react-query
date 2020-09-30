import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserItem from "../components/user.item";
import { fetchUsers } from "../redux/users/users.action_creator";

export default function UsersList() {
  const { data, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (isLoading) return <h2>Chargement...</h2>;
  else
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Noms</th>
            <th>Adresse mail</th>
            <th>Numéro de téléphone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    );
}
