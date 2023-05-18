import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    export interface CustomTheme extends Theme {
        text?: {
            default?: string;
            contrast?: string;
        };
        status: {
            info?: string;
            danger: string;
            warning?: string;
        };
    }
    export interface CustomThemeOptions extends ThemeOptions {
        text?: {
            default?: string;
            contrast?: string;
        };
        status?: {
            info?: string;
            danger?: string;
            warning?: string;
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
