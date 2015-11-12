//  check that the UserId specified owns the documents
ownDocument = function(userId, doc){
  return doc && doc.userId === userId;
}
