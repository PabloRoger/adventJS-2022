function fitsInOneBox(boxes) {
  let props = { l : [], w : [], h : [] }
    
  boxes.forEach((elem)=>{
    props.l.push(elem.l);
    props.w.push(elem.w);
    props.h.push(elem.h);
  })
  
  const containsDuplicates = (array) => {
  if (array.length == new Set(array).size) { return false; }
  return true;
  }
        
  return (!containsDuplicates(props.l) && !containsDuplicates(props.w) && !containsDuplicates(props.h));
}

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
])