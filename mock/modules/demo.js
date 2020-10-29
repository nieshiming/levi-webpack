const Mock = require('mockjs');

module.exports = {
  'POST /mock/login/account': (req, res) => {
    // const { password, username } = req.body;
    return res.json(
      Mock.mock({
        'data|10': [
          {
            'id|+1': 1,
            username: '@cname',
            'sex|+1': 11
          }
        ]
      })
    );
  },
  'GET /mock/get': (req, res) => {
    return res.json(
      Mock.mock({
        code: 200,
        'data|10': [
          {
            'levelId|+1': 20,
            'levelName|+1': '@character(upper)',
            'quality|+1': '@natural(1,50)',
            'status|+1': [1, 0]
          }
        ]
      })
    );
  },
  'POST /mock/post': (req, res) => {
    return res.json(
      Mock.mock({
        code: 200,
        data: 'post data'
      })
    );
  },
  'PUT /mock/put': (req, res) => {
    return res.json(
      Mock.mock({
        code: 200,
        data: 'put data'
      })
    );
  },
  'DELETE /mock/delete': (req, res) => {
    return res.json(
      Mock.mock({
        code: 200,
        data: 'delete data'
      })
    );
  }
};
