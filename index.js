const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock')


const app = new Koa()
const router = new Router()

async function getRes(fn, ctx) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = fn(ctx)
            resolve(res)
        }, 1000)
    })
}

mockList.forEach(item => {
    const { url, method, response } = item

    router[method](url, async ctx => {
        // 增加返回延迟
        const res = await getRes(response, ctx)
        ctx.body = res
    })
})

app.use(router.routes())

app.listen(3001, () => {
    console.log('http://localhost:3001')
})
