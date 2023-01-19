export const updateWithFolders = (folders, parts, docs) => {
  console.log("folders in", folders);
  console.log("parts in", parts);
  console.log("docs in", docs);
  const updatedFolders = folders.map((folder) => ({
    ...folder,
    parts: putPartIdToUpdatedFolder(`${folder.id}`, parts, docs),
  }));
  return updatedFolders;
};

export const putPartIdToUpdatedFolder = (folderId, parts, docs) => {
  const folderParts = parts.filter(
    (part) => part.folderToBeDisplayedIn === folderId
  );
  const updatedFolderParts = folderParts.map((part) => ({
    ...part,
    docs: findPartsDocs(docs,`${part.id}`),
  }));
  // const partIdsArray = folderParts.map((part)=>(part.id))
  // return partIdsArray;
  return updatedFolderParts;
};

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