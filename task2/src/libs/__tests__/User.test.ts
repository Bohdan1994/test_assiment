import {User, UserInvited, UserTeammate} from "../User";
import {Role, Status, UserShortData} from "../../interfaces";

const mockUser = {
  id: 123,
  role: "Administrator" as Role,
  status: 'verified' as Status,
  phone: '123123'
};

const mockTeammate = {
  id: 123,
  role: "Administrator" as Role,
  status: 'verified' as Status,
  user: {
    id: 123,
    name: 'name',
    lastName: 'lastname',
    phone: '123123',
    email: 'email@gmail.com'
  } as UserShortData
}

describe("User", () => {
  it('should return status', function () {
    const user = new User(mockUser.id, mockUser.role, mockUser.status, mockUser.phone )

    expect(user.getStatus()).toBe(mockUser.status)
  });
});

describe("UserInvited", () => {
  it('should return a phone number', function () {
    const user = new UserInvited(mockUser);

    expect(user.getPhoneNumber()).toBe(mockUser.phone);
  });

  it('should return status', function () {
    const user = new UserInvited(mockUser);

    expect(user.getStatus()).toBe(mockUser.status);
  });
});

describe("UserTeammate", () => {
  it('should return a full name', function () {
    const user = new UserTeammate(mockTeammate);

    expect(user.getFullName()).toBe(`${mockTeammate.user.name} ${mockTeammate.user.lastName}`);
  });

  it('should return status', function () {
    const user = new UserTeammate(mockTeammate);

    expect(user.getStatus()).toBe(mockTeammate.status);
  });
});