// --- Directions
// Given a node validate the binary search tree, ensuring that every node's
// left hand child is less than the parent node's value, and that
// every node's right hand child is greater than the parent

const validate = (node: any, min: any = null, max: any = null) => {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.left, node.daa, max)) {
    return false;
  }

  return true;
};
