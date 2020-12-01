function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b));
}

console.log(intersect([1,2,3,4], [1,2,5]));