const getHomepage = (req, res) => {
    res.render('homePage.ejs')
}

const getLogin = (req, res) => {
    res.render('authenty.ejs')
}

const getFinish = (req, res) => {
    res.render('finish.ejs')
}

module.exports = {
    getHomepage, getLogin, getFinish
}