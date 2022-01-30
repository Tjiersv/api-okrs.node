export interface Logger {
    trace: (str: string) => void,
    debug: (str: string) => void,
    info: (str: string) => void,
    warn: (str: string) => void,
    error: (str: string) => void,
    fatal: (str: string) => void
}