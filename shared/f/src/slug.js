export default (value) =>
  value.toString()
    .trim()
    .normalize('NFD')                  
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^\w]+/g, '-')
    .toLowerCase()
