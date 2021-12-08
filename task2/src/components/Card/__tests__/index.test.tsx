import Card from "../index";
import {render} from "@testing-library/react";
import {mockUsersAdministrators, mockUsersStandardUsers} from "../../../__MOCKS__/mockUser";

describe("<Card /> Administrators ", () => {
  it('should render a title', function () {
    const {getByText} = render(<Card title={"Administrators"} data={mockUsersAdministrators}/>);

    expect(getByText('Administrators')).toBeInTheDocument();
  });
  it('should render correct teammates count', function () {
    const {getAllByRole} = render(<Card title={"Administrators"} data={mockUsersAdministrators}/>);

    expect(getAllByRole('name').length).toBe(2);
  });
});

describe("<Card /> Standard Users", () => {
  it('should render a title', function () {
    const {getByText} = render(<Card title={"Standard Users"} data={mockUsersStandardUsers}/>);

    expect(getByText('Standard Users')).toBeInTheDocument();
  });
  it('should render correct teammates count', function () {
    const {getAllByRole} = render(<Card title={"Standard Users"} data={mockUsersStandardUsers}/>);

    expect(getAllByRole('phone').length).toBe(2);
  });
})