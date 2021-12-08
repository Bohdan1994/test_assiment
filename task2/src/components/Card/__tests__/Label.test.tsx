import {render} from "@testing-library/react";
import {Label} from "../Label";

const setup = () => {
  return render(<Label data={'test'} />)
}

describe("<Label />", () => {
  it('should render in the DOM', function () {
    const {getByText} = setup();

    expect(getByText('test')).toBeInTheDocument();
  });
})