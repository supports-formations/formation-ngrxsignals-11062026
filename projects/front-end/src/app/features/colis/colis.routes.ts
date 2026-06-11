import { AddNewOne } from './components/add-new-one/add-new-one';
import { DisplayAllColis } from './components/display-all-colis/display-all-colis';

export const colisRoutes = [
    {
        path: 'add',
        component: AddNewOne
    },

    {
        path: '',
        component: DisplayAllColis
    }
]