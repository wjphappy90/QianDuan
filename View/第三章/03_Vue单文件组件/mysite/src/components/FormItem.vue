<template>
  <div>
    <label v-if="label">{{label}}</label>
    <!-- 槽的作用 -->
    <slot></slot>
    <!-- 显示检验的错误信息 -->
    <p v-if="validateStatus=='error'" class="error">{{errorMessage}}</p>
  </div>
</template>

<script>
import schema from "async-validator";
// 0: label和prop实行
// 1.获取当前输入框的规则
// 2.如果输入框和rule不匹配 显示错误信息
// 3.Input组件中涌入输入内容时,通知FormItem做校验(校验的方法)
// 4.使用async-validator做检验
// npm i async-validator -S
export default {
  name: "FormItem",
  data() {
    return {
      validateStatus: "", //检验的状态值
      errorMessage: "" //显示的错误信息
    };
  },
  inject: ["form"],
  mounted(){
      if(this.prop){ //必须判断,因为Form组件的子组件可能不是FormItem
        this.$parent.$emit('formItemAdd',this);
      }
  },
  methods: {
    validate(value) {
      return new Promise(resolve => {
        // let descriptor = {}; //此对象要存储校验规则
        // 获取检验对象 ==>Form组件对象=>rules[this.prop]
        // descriptor[this.prop] = this.form.rules[this.prop];
        const descriptor = { [this.prop]: this.form.rules[this.prop] };
        const validator = new schema(descriptor);
        //   let obj = {};
        //   obj[this.prop] = value;

        validator.validate({ [this.prop]: value }, errors => {
          if (errors) {
            // 显示错误
            this.validateStatus = "error";
            this.errorMessage = errors[0].message;
            resolve(false);
          } else {
            // 错误置空
            this.validateStatus = "";
            this.errorMessage = "";
            resove(true);
          }
        });
      });
    }
  },
  created() {
    this.$on("validate", this.validate);
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      //name或者是pwd
      type: String,
      default: ""
    }
  }
};
</script>

<style  scoped>
.error {
  color: red;
}
</style>