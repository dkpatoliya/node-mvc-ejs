
exports.up = function (knex) {

    return knex.schema
        .createTable("tbl_user", function (table) {
            table.increments().primary();
            table.string("f_name", 64).notNullable();
            table.string("l_name", 64).notNullable();
            table.string("profile_image", 255).notNullable();
            table.string("email", 128).notNullable();
            table.string("password", 32).notNullable();
            table.date("birth_date");
            table.enu("gender", ["M", "F", "O"], { useNative: true, enumName: "gender_enum" }).defaultTo("M");
            table.text("address").notNullable();            
            table.enu("status", ["Active", "Inactive", "Deleted"], { useNative: true, enumName: "status_enum" }).defaultTo("Active");
            table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
            table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
            table.timestamp("deleted_at");
        });

};

exports.down = function (knex) {
    return knex.schema.dropTable("tbl_user");
};
