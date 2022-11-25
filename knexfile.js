// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const path=require("path");

const BASE_URL=path.join(__dirname,'src','server','db');


module.exports = {

  development: {
    client: 'pg',
    connection:`postgres://postgres:12345@localhost:5433/express_api`,
    migration:{
      directory:path.join(BASE_URL,'migrations')
    },
  seeds:{
    directory:path.join(BASE_URL,'seeds')
  }
  },

};
