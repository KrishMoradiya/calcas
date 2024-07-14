import React from 'react';
import { render, waitFor } from '@testing-library/react';
import TypographyBlock from '../packages/calcas-theme/src/components/common/typography_block/TypographyBlock';

describe('TypographyBlock component', () => {
  it('renders header component', async () => {
    const { getByRole } = render(<TypographyBlock headerChildren="Header Text"/>);

    await waitFor(() => {
      const headerElement = getByRole('heading', { name: /header text/i });
      expect(headerElement).toBeInTheDocument();
    });
  });

  it('renders paragraph component', async () => {
    const { getByText } = render(<TypographyBlock paragraphChildren="Paragraph Text" />);

    await waitFor(() => {
      const paragraphElement = getByText(/paragraph text/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  it('renders both header and paragraph components', async () => {
    const { getByRole, getByText } = render(<TypographyBlock headerChildren="Header Text" paragraphChildren="Paragraph Text"/>);

    await waitFor(() => {
      const headerElement = getByRole('heading', { name: /header text/i });
      const paragraphElement = getByText(/paragraph text/i);

      expect(headerElement).toBeInTheDocument();
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
