<template>
  <div>
    <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">
    <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn btn-default" @click="login">登录</button>
  </div>
</template>

<script>
import jsonArray from '../utils/jsonArray'
export default {
  data () {
    return {
      account: '',
      password: '',
      arr: [{ 'id': 1, 'name': '李卓' }, { 'id': 5, 'name': 's' }, { 'id': 3, 'name': '李金伟' }]
    }
  },
  mounted () {
    console.log(jsonArray.excludeSame([]))
  },
  methods: {
    login () {
      // 获取已有账号密码
      this.$http.get('/api/login/getAccount')
        .then((response) => {
          // 响应成功回调
          console.log(response)
          let params = {
            account: this.account,
            password: this.password
          }
          // 创建一个账号密码
          return this.$http.post('/api/login/createAccount', params)
        })
        .then((response) => {
          console.log(response)
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  }
}
</script>
