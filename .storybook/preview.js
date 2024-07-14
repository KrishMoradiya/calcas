import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/raleway';
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/300-italic.css'
import '@fontsource/raleway/400-italic.css'
import '@fontsource/raleway/500-italic.css'
import '@fontsource/raleway/700-italic.css'
import '@fontsource/material-icons';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import customTheme from '../packages/calcas-theme/src/styles/themes/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    mainTheme: customTheme,
  },
  defaultTheme: 'mainTheme',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
