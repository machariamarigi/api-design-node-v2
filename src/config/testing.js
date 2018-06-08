export const config = {
  expireTime: '30d',
  secrets: {
    JWT_SECRET: 'iamatestingconfiginatestingworld'
  },
  db: {
    url: 'mongodb://localhost/jams-test'
  },
  disableAuth: false
}