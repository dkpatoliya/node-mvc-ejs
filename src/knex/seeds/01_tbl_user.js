
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tbl_user").del()
        .then(function () {
            // Inserts seed entries
            return knex("tbl_user").insert([
                { id: 1, name: "Divyesh Patoliya", email: "divyesh@email.com", password: "123456" },
                { id: 2, name: "Ajeet Karmur", email: "ajeet@email.com", password: "123456" },
                { id: 3, name: "Ravi kumar", email: "ravi@email.com", password: "123456" }
            ]);
        });
};

