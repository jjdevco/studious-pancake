/// <reference types="next" />
/// <reference types="next/types/global" />

type WithChildren<T = {}> = T & { children?: React.ReactNode };
