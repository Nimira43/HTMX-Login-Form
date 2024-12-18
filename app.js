import express from 'express'

const app = express();

app.use(express.urlencoded({
  extended: false
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/png" href="/billy.png">
      <link rel="stylesheet" href="/style.css">
      <title>HTMX Login</title>
    </head>
    <body>
      <main>
        <form>
          <h1 class="heading">NimiraTech Login</h1>
          <div class="control">
            <label for="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
            >
            <p class="error"></p>
          </div>
          <div class="control">
            <label for="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
            >
            <p class="error"></p>
          </div>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </main>
    </body>
    </html>
  `)
})

app.listen(3000)