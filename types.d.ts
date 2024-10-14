declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare module NodeJS {
  interface NodeRequire {
    context(directory: string, useSubdirectories: boolean, regExp: RegExp): __WebpackModuleApi.RequireContext;
  }
}