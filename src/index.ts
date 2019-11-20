// @ts-ignore
import { resolve } from 'mssql/lib/connectionstring'
import { log } from 'log-all-the-things'

log()

const str = process.argv[2]

if (!str) {
  log.red('Must provide a connection string')()
  process.exit(1)
}

log(JSON.stringify(resolve(str), null, 2))()
