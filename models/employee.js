'use strict';

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

const viewEmployee = {
    store: new JsonStore('./models/employee.json', {employees: []}),
    collection: 'employees',
    array: 'employees',

    getEmployees(){
        return this.store.findAll(this.collection);
    },

};

export default viewEmployee;