
export const findPartsDocs = (docs, partId) => {
  console.log("@docs@", docs);
  console.log("@partId@", partId);
  const appDocs = docs.filter((doc) => {
    // console.log("doc.concerningParts£££", doc.concerningParts);
    return doc.concerningParts.includes(partId);
  });
  return appDocs;
}
// const createUpdatedPartWithDocs = (docs, partId) => {
//   return {
//     ...part,
//     docs: findPartsDocs(docs,`${partId}`),
//   };
// };

// export default findPartsDocs;