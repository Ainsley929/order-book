function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook.length === 0) {
    return updatedBook.concat(incomingOrder)
  }

  if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity === incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    return updatedBook

  }
  else if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity > incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    const partialOrder = existingBook[0].quantity - incomingOrder.quantity
    existingBook[0].quantity = partialOrder
    return existingBook

  }
  else if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity < incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    const partialSale = incomingOrder.quantity - existingBook[0].quantity
    incomingOrder.quantity = partialSale
    updatedBook.push(incomingOrder)
    return updatedBook

  }
  else if ((existingBook[0].type === 'buy') && (incomingOrder.type === 'sell') && (existingBook[0].quantity === incomingOrder.quantity) && (incomingOrder.price <= existingBook[0].price)) {
    return updatedBook
  }
  updatedBook = existingBook.concat(incomingOrder)
  return updatedBook
}

module.exports = reconcileOrder
