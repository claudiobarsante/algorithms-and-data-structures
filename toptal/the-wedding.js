function wedding(lina, carlos) {
  if (lina.length !== carlos.length) return false;

  const list = new Set([...lina, ...carlos]);
  console.log('list', list);
  if (list.size === lina.length) return true;

  return false;
}

console.log(wedding(['a', 'b', 'c'], ['a', 'b', 'c']));
