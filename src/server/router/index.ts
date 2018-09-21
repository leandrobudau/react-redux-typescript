import { Router, Request, Response, NextFunction } from 'express';

export class TestRouter {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }
    public get(req: Request, res: Response, next: NextFunction) {
        res.json({
            teste:'ok'
        });
    }
    init() {
        this.router.get('/', this.get);
    }
};
const testRouter = new TestRouter();
testRouter.init();

export default testRouter.router;