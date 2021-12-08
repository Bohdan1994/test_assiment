import {API} from "../../libs/API";
import {useEffect, useState} from "react";
import {Invite, TeamMember} from "../../interfaces";

export const useUsers = () => {
  const client = new API();
  const [users, setState] = useState<Array<TeamMember | Invite>>([]);
  const administrators = users.filter(user => user.role === 'Administrator');
  const standardUsers = users.filter(user => user.role === 'Standard');

  useEffect(() => {
    (async () => {
      const allUsers = await client.getAllUsers();
      if (!allUsers) {
        return;
      }
      setState(allUsers)
    })();
  }, []);

  return {
    administrators,
    standardUsers
  }
}