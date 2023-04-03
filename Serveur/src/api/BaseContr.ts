import { Request } from "express";
import { Controller } from "tsoa";

export abstract class BaseController extends Controller {
    public abstract routeName: string;

    private capitalizeEveryWords(words: string[]) {
        let res = ""
        for (const word of words) {
            res += word[0].toUpperCase() + word.slice(1);
        }
        return res;
    }

    public async processRequest(request: Request) {
        const url = request.path.split(this.routeName)[1];
        const test = url.split("/");
        if (test.length = 0) return;
        const realFunctionName = test.length <= 1 ? test[0] : test.shift()! + this.capitalizeEveryWords(test);

        //@ts-ignore
        if (this[realFunctionName] && typeof this[realFunctionName] == "function") {
            //@ts-ignore
            return this[realFunctionName]();
        }
    }
}