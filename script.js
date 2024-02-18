// №1 
function getLength(data) {
  if (typeof(data) === 'number' && !Number.isNaN(data)) {
    console.log(String(data).length);
  } else if (typeof(data) === 'string') {
    console.log(data.length);
  } else if (Array.isArray(data)) {
    console.log(data.length);
  } else if (data instanceof Object) {
    console.log(Object.keys(data).length);
  } else {
    console.log(0);
  }
}

// №2
function compare(node1, node2) {
  if (!node1 && !node2) {
      return true;
  }
  if (!node1|| !node2) {
      return false;
  }
  if (node1.value !== node2.value) {
      return false;
  }
  return compare(node1.left, node2.left) && compare(node1.right, node2.right);
}

const node1 = { 
  value: 1, 
  left: { 
    value: 2, left: undefined, right: undefined 
  }, 
  right: { 
    value: 3, left: undefined, right: undefined 
  } 
};

const node2 = { 
  value: 1, 
  left: { 
    value: 2, left: undefined, right: undefined 
  }, 
  right: { 
    value: 3, left: undefined, right: undefined 
  } 
};

const node3 = { 
  value: 1, 
  left: { 
    value: 3, left: undefined, right: undefined 
  }, 
  right: { 
    value: 3, left: undefined, right: undefined 
  } 
};
const node4 = { 
  value: 1,
  left: { 
    value: 2, left: undefined, right: undefined 
  }, 
  right: { 
    value: 3, left: undefined, right: undefined 
  } 
};

console.log(compare(node1, node2));
console.log(compare(node3, node4));