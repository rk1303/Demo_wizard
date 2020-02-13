addUser = (req, res) => {
    const { name, email, msg, phone, org, captcha } = req.body;
    if (!(name && email && msg && phone && org && captcha !== undefined)) {
        return res.status(400).send("Some of the required property missing");
    }
    let userIdQuery = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(userIdQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length > 0) {
            message = 'EmailId already exists';
            res.status(400).send(message);
        } else {
            let query = "INSERT INTO `users` (name, email, msg, phone, org, çaptcha) VALUES ('" +
                name + "', '" + email + "', '" + msg + "', '" + phone + "', '" + org + "', " + captcha + ")";  
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).send('User Added Sucessfully');
            });
        }
    });
}
module.exports = addUser;