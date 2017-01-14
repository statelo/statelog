module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "API",
      script    : "./server/src/app.js",
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "statelo",
      host : "128.199.210.5",
      ref  : "origin/master",
      repo : "https://github.com/statelo/statelog.git",
      path : "~/statelog",
      "post-deploy" : "nvm install && npm install && /home/statelo/.nvm/versions/node/v6.9.4/bin/pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
