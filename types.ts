export enum LocatorStrategy {
    id = 'id',
    xpath = 'xpath',
    role = 'role',
    altText = 'altText',
    text = 'text'
}

export type CustomLogin = {
    email: string,
    password: string
};

export type ViewportSize = {
    width: number,
    height: number
}