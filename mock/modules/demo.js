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
  }
};
