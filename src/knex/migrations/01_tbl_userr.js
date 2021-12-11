
exports.up = function (knex) {

    return knex.schema
        .createTable("tbl_user", function (table) {
            table.increments().primary();
            table.string("f_name", 255).notNullable();
            table.string("l_name", 255).notNullable();
            table.string("profile_image", 255).notNullable();
            table.string("email", 255).notNullable();
            table.string("password", 255).notNullable();
            table.date("birth_date", 255);
            table.timestamps(true, true);
        });

};

exports.down = function (knex) {
    return knex.schema.dropTable("tbl_user");
};
