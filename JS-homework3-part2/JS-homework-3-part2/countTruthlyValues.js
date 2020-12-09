function values() {

  const valuesArray = [0, 1 ,' ', undefined, false, true];
  const count = valuesArray.filter(Boolean).length;
  
  console.log(count);
}
values();