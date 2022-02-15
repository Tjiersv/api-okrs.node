import { Application } from 'express';
import { getOkrController } from '../components/okr/aplication';

const routes = (app: Application) => {
    const path = '/api/v1'
    app.get(`${path}/okr`, getOkrController)
}

export default routes;