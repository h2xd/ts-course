type ProductPrice<T extends number = 0> = {
  price: T
}

function getProductPrice<T extends number>(price: T): ProductPrice<T> {
  if (price < 0) {
    throw new Error(`A negative price?! Thats impossible`)
  }

  return {
    price
  }
}

const productPrice = getProductPrice(500)

console.log(productPrice)

function calculateTotal(productPrice: ProductPrice, quatity: number): number {
  return productPrice.price * quatity
}

calculateTotal(productPrice, 1)

type WithSignature<T extends { signature: string }> = T

// nah ah ah! Where is the signature?!
const data: WithSignature<{ text: string, signature: string }> = {
  text: `Why can't I just eat my waffle?`,
  signature: 'Barack Obama'
}