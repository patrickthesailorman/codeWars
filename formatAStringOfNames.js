function list(names){
 return names.map(function(person) { return person.name; })
  .join(", ")
  .replace(/, (?!.*, )/, " & ");
}