

export enum LoginType {
    PHONE = 0,
    EOS = 1,
    ETH = 2,
}

export enum BindType {
    EOS = 0,
    ETH = 1,

}

export interface Response {
    code: number,
    message: string,
    data: any
}

export interface RigisterArgs {
    username?: string,
    number: string,
    phone: string,
    code: string
}

export class loginPhoneArgs {
    private phone: string;
    private password: string;
    private code: string;
    private type: number = LoginType.PHONE;
    constructor(phone: string, password: string, code: string) {
        this.phone = phone;
        this.password = password;
        this.code = code;
    }
}
export class loginEosArgs {
    private address: string;
    private sign: string;
    private seed: string;
    private type: number = LoginType.EOS;
    constructor(address: string, sign: string, seed: string) {
        this.address = address;
        this.sign = sign;
        this.seed = seed;
    }
}
export class loginEthArgs {
    private account: string;
    private pubKey: string;
    private sign: string;
    private seed: string;
    private type: number = LoginType.ETH;
    constructor(account: string, pubKey: string, sign: string, seed: string) {
        this.account = account;
        this.pubKey = pubKey;
        this.sign = sign;
        this.seed = seed;
    }
}

export type LoginArgs = loginPhoneArgs | loginEosArgs | loginEthArgs
export const loginArgsArr = ['loginPhoneArgs', 'loginEosArgs', 'loginEthArgs']

export class BindEosArgs {
    private account: string;
    private sign: string;
    private seed: string;
    private pubKey: string;
    private type: BindType = BindType.EOS

    constructor(account: string, sign: string, seed: string, pubKey: string) {
        this.account = account;
        this.pubKey = pubKey;
        this.sign = sign;
        this.seed = seed;
    }
}
export class BindEthArgs {
    private address:string;
    private sign:string;
    private seed:string;
    private type:BindType= BindType.ETH;

    constructor(address: string, sign: string, sign: string, seed: string) {
        this.address = address;
        this.sign = sign;
        this.seed = seed;
    }
}

export type BindArgs = BindEosArgs | BindEthArgs 
export const BindArgsArr = ['BindEosArgs', 'BindEthArgs']

export class UnbindEosArgs {
    private accounts: string;
    private sign: string;
    private seed: string;
    private pubKey: string;
    private type: BindType = BindType.EOS

    constructor(accounts: string, sign: string, seed: string, pubKey: string) {
        this.accounts = accounts;
        this.pubKey = pubKey;
        this.sign = sign;
        this.seed = seed;
    }
}

export class UnbindEthArgs {
    private accounts: string[];
    private type: BindType = BindType.ETH

    constructor(accounts: string[]) {
        this.accounts = accounts;
    }
}

export type UnbindArgs = UnbindEosArgs | UnbindEthArgs
export const unbindArgsArr = ['UnbindEosArgs', 'UnbindEthArgs']


export interface EditEthName {
    address: string,
    name: string,
}

export class DefaultEthAccount {
    private address: string;
    private type: BindType = BindType.ETH

    constructor(address: string) {
        this.address = address;
    }
}

export class DefaultEosAccount {
    private account: string;
    private type: BindType = BindType.EOS

    constructor(account: string) {
        this.account = account;
    }
}

export type DefaultAccount = DefaultEthAccount | DefaultEosAccount
export const defaultAccountArr = ['DefaultEthAccount', 'DefaultEthAccount']