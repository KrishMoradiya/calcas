import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from '../packages/calcas-theme/src/components/common/divider/Divider';

describe('Divider component', () => {
  it('renders divider component', async () => {
    render(<Divider />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toBeInTheDocument();
  });
});