export const appName = 'Fake Store'
export const appDescription = 'React Template'

export const trunc = (text: string | undefined, maxLength: number): string =>
    text && text.length > maxLength
        ? text.substring(0, maxLength - 3) + '...'
        : text || ''