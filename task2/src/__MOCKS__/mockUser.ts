import {Invite, TeamMember} from "../interfaces";

export const mockUser = {
  "id": 1,
  "status": "invited",
  "phone": "+353 1234567",
  "role": "Administrator"
} as Invite;

export const mockTeammateUser = {
  "id": 2,
  "status": "approved",
  "user": {
    "id": 25,
    "name": "Sarah",
    "lastName": "Connors",
    "phone": "+353 1234567",
    "email": "sarah@gmail.com"
  },
  "role": "Administrator"
} as TeamMember;

export const mockUsersAdministrators = [{
  "id": 1,
  "status": "approved",
  "user": {
    "id": 24,
    "name": "Joe",
    "lastName": "Bloggs",
    "phone": "+353 1234567",
    "email": "joe@gmail.com"
  },
  "role": "Administrator"
},
  {
    "id": 2,
    "status": "approved",
    "user": {
      "id": 25,
      "name": "Sarah",
      "lastName": "Connors",
      "phone": "+353 1234567",
      "email": "sarah@gmail.com"
    },
    "role": "Administrator"
  }
] as Array<TeamMember>;

export const mockUsersStandardUsers = [
  {
    "id": 5,
    "phone": "+222 123434645",
    "status": "invited",
    "role": "Standard"
  },
  {
    "id": 6,
    "phone": "+123 1233123",
    "status": "invited",
    "role": "Standard"
  }
] as Array<Invite>