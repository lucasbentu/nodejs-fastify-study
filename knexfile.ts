// Update with your config settings.

import { config } from './src/database'

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: config,
}
