const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')
module.exports = [
    {
        url: '/api/question/:id',
        method: "get",
        response() {
            return {
                errno: 0,
                msg: 'fucking with you',
                data: {
                    id: Random.id(),
                    title: Random.ctitle()
                }
            }
        }
    },
    {
        url: '/api/question',
        method: "post",
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    //  获取，查询问卷列表
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '' } = ctx
            const isDeleted = url.indexOf('isPublised=true') >= 0
            const isStar = url.indexOf('isStar=false') >= 0
            return {
                errno: 0,
                data: {
                    list: getQuestionList({
                        pageSize: 10,
                        isDeleted,
                        isStar
                    }),
                    total: 100, //总数
                }
            }
        }
    }
]