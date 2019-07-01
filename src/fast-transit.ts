import { FastId } from './fastid'
import {
    Response,
} from "./fastid-interface";
export class Transit {

    public async addPendingTransit(txId: string, account: string, amount: number, token: string): Promise<Response> {
        let body = { txId, account, amount, token, tyep: 0 };
        FastId.getInstance()._checkLogin();
        return await FastId.getInstance()._fetch('transit/addPendingTransition', body)
    }

    public async getTransitInfo(account: string): Promise<Response> {
        let body = { account, tyep: 0 };
        FastId.getInstance()._checkLogin();
        return await FastId.getInstance()._fetch('transit/getTransitionInfo', body)
    }

    public async  getHistoryTransit(page: number = 1, size: number = 10): Promise<Response> {
        FastId.getInstance()._checkLogin();
        return await FastId.getInstance()._fetch('transit/getHistoryTransition', { page, size })
    }
}