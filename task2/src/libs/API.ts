import {Invite, TeamMember} from "../interfaces";
import axios from "axios";

export class API {
  getAllUsers = async () => {
    const usersResp = await this.getUsers();
    const invites = await this.getInvites();
    if (!usersResp || !invites) {
      throw new Error('Something went wrong')
      return false;
    }
    return [...usersResp, ...invites]
  }

  getUsers = async (): Promise<Array<TeamMember> | undefined> => {
    const path = 'users';
    const usersResp = await axios.get(path);
    if (usersResp.status !== 200) {
      console.log(usersResp.statusText);
      return undefined
    }
    return usersResp.data
  }

  getInvites = async (): Promise<Array<Invite> | undefined> => {
    const path = 'invites';
    const usersResp = await axios.get(path);
    if (usersResp.status !== 200) {
      console.log(usersResp.statusText);
      return undefined;
    }
    return usersResp.data;
  }
}