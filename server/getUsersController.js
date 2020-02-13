getUsers = (req, res) => {
    let query = "SELECT * FROM `users`";

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("error while fetching data");
        }
        res.json(result);
    });
}
module.exports = getUsers;