module.exports = app => {
  app.route('/register')
    .post(app.api.user.save)
}