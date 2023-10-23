const Mock = require('mockjs')
const Random = Mock.Random
// commonjs .js
module.exports = [
    {
        url: '/api/test',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    name: Random.cname(),
                }
            }
        }
    }
]