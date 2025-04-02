const router = createRouter()

router.get('/test', defineEventHandler((event) => {
    return 'Get nested route.'
}))

router.post('/test', defineEventHandler((event) => {
    return 'Post nested route.'
}))

router.put('/test', defineEventHandler((event) => {
    return 'Put nested route.'
}))

router.delete('/test', defineEventHandler((event) => {
    return 'delete nested route.'
}))

/* router.get('/test/category', defineEventHandler((event) => {
    return 'Category'
})) */

export default useBase('/api/nested', router.handler)