import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

export default createMuiTheme({
  palette: {
    primary: indigo
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white'
      }
    }
  },
  typography: {
    monoFamily: '"Roboto Mono", "Helvetica", "Arial", sans-serif',
    useNextVariants: true
  },
  mixins: {
    content: {
      paddingTop: '1.5rem',
      paddingRight: '1rem',
      paddingBottom: '1.5rem',
      paddingLeft: '1rem',
      '@media (min-width: 600px)': {
        paddingTop: '2rem',
        paddingRight: '1.5rem',
        paddingBottom: '2rem',
        paddingLeft: '1.5rem'
      },
      '@media (min-width: 828px)': {
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: 780,
        margin: '0 auto'
      }
    }
  }
});