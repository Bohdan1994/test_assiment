import {API} from "../API";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {dbMock} from "../../__MOCKS__/db";

let mock: any;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

describe("API", () => {

  it('should call invites', async function () {
    const client = new API();
    mock.onGet(`invites`).reply(200, dbMock.invites);
    await client.getInvites();
    expect(mock.history.get[0].url).toEqual(`invites`)
  });

  it('should return invites', async function () {
    const client = new API();
    mock.onGet(`invites`).reply(200, dbMock.invites);
    const invites = await client.getInvites();

    expect(invites).toEqual(dbMock.invites)
  });

  it('should return users', async function () {
    mock.onGet(`users`).reply(200, dbMock.users);
    const client = new API();
    const users = await client.getUsers();

    expect(users).toEqual(dbMock.users)
  });

  it('should call getUsers', async function () {
    mock.onGet(`users`).reply(200, dbMock.users);
    const client = new API();
    await client.getUsers();

    expect(mock.history.get[0].url).toEqual(`users`)
  });
});