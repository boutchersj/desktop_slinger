export enum LocatorStrategy {
    id = 'id',
    xpath = 'xpath',
    role = 'role',
    altText = 'altText',
    text = 'text',
    placeholder = 'placeholder'
}

export type CustomLogin = {
    email: string,
    password: string
};

export type ViewportSize = {
    width: number,
    height: number
}