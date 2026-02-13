'use strict';

import logger from "../utils/logger.js";

const displayEmployee = {
    store: new viewEmployee('./models/employee.json', {info: {}}),
    collection: 'info',
    array: 'creators',

    getAppInfo(){
        return this.store.findAll(this.collection);
    }
};

export default displayEmployee;