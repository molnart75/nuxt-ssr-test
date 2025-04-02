export default defineEventHandler(async (event) => {
    const data = await $fetch('https://hur.webmania.cc/products.json')

    return data
  })

