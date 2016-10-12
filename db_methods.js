
module.exports.create_incoming_message =  function(client, body, mo_number, destination, time) {
  var values = [body, mo_number, destination, time];
  var result = execute_query(client, values, 'INSERT INTO incoming_messages(body, mo_number, destination, time)  values($1, $2, $3, $4)');
  console.log("INSERT results - ", result)
  return result
}

//private
var execute_query = function(client, values, query_string) {
  var query = client.query(query_string, values);
  //console.log("This is the result - ", query);
  query.on('end', () => { 
    client.end(); 
});

  return query;
};
