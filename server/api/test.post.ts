export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return `Az ön kora ${body.age + 10}` 
})