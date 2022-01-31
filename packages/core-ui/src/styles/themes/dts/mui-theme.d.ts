declare global {
  module '@mui/material/styles' {
    interface TypeDisabled {
      background?: string;
      input?: string;
      button?: string;
    }

    interface Palette {
      disabled?: TypeDisabled;
    }

    interface PaletteOptions {
      disabled?: TypeDisabled;
    }

    interface Theme {
      name: string;
      palette: Palette;
    }

    interface ThemeOptions {
      name: string;
      palette?: PaletteOptions;
    }
  }
}
