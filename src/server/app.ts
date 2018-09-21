import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import TestRouter from './router/index';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                texto: 'Testando'
            });
        });
        this.express.use('/api', router);
        this.express.use('/api/test', TestRouter);
    }
}
export default new App().express;