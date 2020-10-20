<template>
  <div>
    <h3>element表单</h3>
    {{ruleForm}}
    <!-- 自己的组件 -->
    <m-form :model='ruleForm' :rules='rules'>
      <m-form-item label="用户名" prop="name">
        <m-input v-model="ruleForm.name"></m-input>
      </m-form-item>
      <m-form-item label="密码" prop="pwd">
        <m-input type="password" v-model="ruleForm.pwd"></m-input>
      </m-form-item>
      <m-form-item>
        <el-button type="primary" @click="submitForm2('ruleForm')">提交</el-button>
      </m-form-item>
    </m-form>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
    <!-- 自己的表单 -->
  </div>
</template>



<script>
// Form 定义数据 负责定义校验规则
// FormItem 负责显示错误信息
// Input 负责双向数据绑定

// provide inject内部共享数据
import MInput from "./Input";
import MFormItem from "./FormItem";
import MForm from "./Form";
export default {
  name: "FormElement",
  components: {
    MInput,
    MFormItem,
    MForm
  },
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称" },
          { min: 6, max: 10, message: "请输入6~10位用户名" }
        ],
        pwd: [{ require: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm(name) {
      console.log(name); //ruleForm
      
      this.$refs[name].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("验证成功,可以提交");
        } else {
          alert("error 提交");
          return false;
        }
      });
    },
    // 自己写的校验事件
    submitForm2(name){
      this.$refs[name].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("验证成功,可以提交");
        } else {
          alert("error 提交");
          return false;
        }
      });
    }
  }
};
</script>