import {Invite, Role, Status, TeamMember} from "../interfaces";

export class User {
  private id:number;
  private role:Role;
  private status:Status;
  private phone:string;

  constructor(id:number, role:Role, status:Status, phone:string) {
    this.id = id;
    this.role = role;
    this.status = status;
    this.phone = phone;
  }

  getStatus = ():string => {
    return this.status
  }

  getPhoneNumber = ():string => {
    return this.phone
  }
};

export class UserInvited extends User {
  constructor(data:Invite) {
    super(data.id, data.role, data.status, data.phone);
  }
}

export class UserTeammate extends User{
  private name:string;
  private lastName:string;

  constructor( data:TeamMember) {
    super(data.id, data.role, data.status, data.user.phone);
    this.name = data.user.name;
    this.lastName = data.user.lastName;
  }

  getFullName = ():string => {
    return `${this.name} ${this.lastName}`
  }
}