export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = [
    'SOMA',
    'Union Square',
  ];

  // Const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
