const MODE = process.env.NODE_ENV;

export default (): object => ({
  mode: MODE,
  port: +process.env.PORT,
  database: {
    revoluterra: {
      url: process.env.DB_PG_REVOLUTERRA_URL
    },
    log: process.env.DB_PG_LOG.split(' '),
    explicit: Boolean(process.env.DB_PG_EXPLICIT)
  }
})