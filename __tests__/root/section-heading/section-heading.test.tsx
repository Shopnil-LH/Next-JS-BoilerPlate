// External Imports
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

// Internal Imports
import { SectionHeading } from '@src/components/root';
import { sectionHeadingData } from '@root/__mock-props__/components/root/section-heading';

// cleanup
afterEach(cleanup);

// SectionHeading
describe('SectionHeading', () => {
  let sectionHead: HTMLElement | null;
  let subTitleElement: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<SectionHeading {...sectionHeadingData} />);
  });

  // render SectionHeading
  it('renders a SectionHeading correctly', () => {
    sectionHead = screen.getByTestId('section-heading');
    expect(sectionHead).toBeInTheDocument();
  });
  // render colorScheme
  it('render SectionHeading colorScheme correctly', () => {
    sectionHead = screen.getByTestId('section-heading');
    expect(sectionHead).toHaveClass(`${sectionHeadingData?.colorScheme}`);
  });
  // subTitle
  it('render SectionHeading subTitle correctly', () => {
    subTitleElement = screen.getByText(`${sectionHeadingData?.subTitle}`);
    expect(subTitleElement).toHaveTextContent(
      `${sectionHeadingData?.subTitle}`
    );
  });
  // title
  it('render SectionHeading title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render SectionHeading description correctly', () => {
    paraElement = screen.getByText(`${sectionHeadingData?.description}`);
    expect(paraElement).toHaveTextContent(`${sectionHeadingData?.description}`);
  });
});
