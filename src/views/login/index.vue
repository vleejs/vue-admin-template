<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type FormInstance, FormRules } from 'element-plus'
const loginFormRef = ref<FormInstance | null>(null)

const loading = ref(false)
const loginFormData = reactive({
  username: 'admin',
  password: '123456',
  code: ''
})
const loginFormRules: FormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 8,
      max: 16,
      message: '长度在8到16个字',
      trigger: 'blur'
    }
  ]
}
const handleLogin = () => {
  console.log('登录')
}
</script>
<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title"></div>
      <div class="content">
        <el-form
          ref="loginFormRef"
          :model="loginFormData"
          :rules="loginFormRules"
          :inline="false"
          @keyup.enter="handleLogin"
        >
          <el-form-item prop="username">
            <el-input v-model.trim="loginFormData.username" placeholder="用户名" type="text" tabindex="1"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginFormData.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              show-password
            ></el-input>
          </el-form-item>
          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">登 录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
