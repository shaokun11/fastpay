import * as fetch from 'node-fetch'

import {
    Response,
    RigisterArgs,
    LoginArgs,
    loginArgsArr,
    UnbindArgs,
    unbindArgsArr,
    EditEthName,
    DefaultAccount,
    defaultAccountArr,
    BindArgsArr,
    BindArgs
} from "./fastid-interface";

export class FastId {
    private static _instance: FastId;
    private token: string = ""
    public baseUrl: string

    public static getInstance(baseUrl: string = ""): FastId {
        if (FastId._instance === null) {
            FastId._instance = new FastId(baseUrl)
        }
        return FastId._instance
    }

    private constructor(baseUrl: string) {
        this.baseUrl = baseUrl || 'https://www.fastwin.io:9876/'
    }

    public async verifyToken(fastId: string) {
        this._checkLogin()
        return await this._fetch('user/verifyToken', { fastId });
    }

    public async getUserInfo() {
        this._checkLogin()
        return await this._fetch('user/getUserInfo');
    }

    public async setDefaultAccount(args: DefaultAccount) {
        this._checkLogin()
        if (!defaultAccountArr.includes(args.constructor.name)) throw 'not support type'
        await this._fetch('user/chooseDefaultAccount', args);
    }

    public async editEthName(args: EditEthName) {
        this._checkLogin()
        await this._fetch('user/editEthName', args);
    }

    public async ubbindAccount(args: UnbindArgs) {
        this._checkLogin()
        if (!unbindArgsArr.includes(args.constructor.name)) throw 'not support type'
        await this._fetch('user/unbind', args);
    }

    public async bindAccount(args: BindArgs) {
        this._checkLogin()
        if (!BindArgsArr.includes(args.constructor.name)) throw 'not support type'
        await this._fetch('user/bind', args);
    }

    public async getPhoneCode(phone: string): Promise<Response> {
        return await this._fetch('user/sendPhoneCode', { phone });
    }

    public async register(args: RigisterArgs): Promise<Response> {
        return await this._fetch('user/register', args)
    }

    public async login(args: LoginArgs) {
        if (!loginArgsArr.includes(args.constructor.name)) throw 'not support type'
        let res = await this._fetch("user/login", args);
        this.setToken = res.data.token
    }
    public async _fetch(path: string, body: object = {}) {
        let response;
        let json;
        try {
            response = await new fetch.Request(this.baseUrl + path, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': this.token
                }
            })
            json = await response.json();
            if (json.code != 20000) {
                throw JSON.stringify(json)
            }
        } catch (error) {
            throw error;
        }
        return json;
    }

    public setToken(token: string) {
        this.token = token
    }

    public _checkLogin() {
        if (!this.token) throw "please login first"
    }
}