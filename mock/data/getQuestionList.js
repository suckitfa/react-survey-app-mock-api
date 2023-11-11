/**
 * @description 生成问卷列表
*/

const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt = {}) {
    const { isDeleted = false, isStar = false, pageSize } = opt
    const list = []
    for (let i = 0; i < pageSize; i++) {
        list.push({
            title: Random.ctitle(),
            id: Random.id(),
            isPublised: Random.boolean(),
            isStar: isStar,
            answerCount: Random.natural(50, 100),
            createAt: Random.datetime(),
            isDeleted: isDeleted
        })
    }
    return list
}

module.exports = getQuestionList