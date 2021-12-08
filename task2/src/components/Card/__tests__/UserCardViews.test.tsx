import {render} from "@testing-library/react";
import {TeamMemberView, UserCardView} from "../UserCardViews";
import {mockTeammateUser, mockUser} from "../../../__MOCKS__/mockUser";


describe("<UserCardView />", () => {
  it('should render in the DOM', function () {
    const {getByText} = render(<UserCardView data={mockUser} onClick={() => {
    }}/>);

    expect(getByText(mockUser.phone)).toBeInTheDocument();
    expect(getByText('invited')).toBeInTheDocument();
  });
});

describe("<TeamMemberView />", () => {
  it('should render in the DOM', function () {
    const {getByText} = render(<TeamMemberView data={mockTeammateUser} onClick={() => {
    }}/>);

    expect(getByText(`${mockTeammateUser.user.name} ${mockTeammateUser.user.lastName}`)).toBeInTheDocument();
  });

})