import 'styled-components';
import { theme } from './theme'; // Importe o objeto do tema que criamos

// Pegamos o tipo do objeto 'theme' automaticamente
type ThemeType = typeof theme;

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType {
    }
}