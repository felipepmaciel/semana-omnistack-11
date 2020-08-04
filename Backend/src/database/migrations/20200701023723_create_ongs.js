
//metodo up é para criar
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

//metodo down é para se algo der errado e precisar deletar a tabela, desfazer
exports.down = function(knex) {
    knex.schema.dropTable('ongs');
  
};