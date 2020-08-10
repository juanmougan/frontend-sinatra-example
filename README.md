# frontend-sinatra-example

Example of a Ruby API (on Sinatra) and JS UI, meant to be served from Heroku.  
Mostly following [this tutorial](https://medium.com/@ashwanth1109/deploying-a-rails-react-app-full-stack-app-on-heroku-51f45a8ebd5f)

## Instructions

### For Heroku

1. Create the app: `heroku apps:create frontend-sinatra-example`

2. Make sure the UI starts before the API

```
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

3. Add a `package.json` at the root level

4. Add a `Procfile` at the root level

5. Deploy to Heroku: `git push heroku master`
