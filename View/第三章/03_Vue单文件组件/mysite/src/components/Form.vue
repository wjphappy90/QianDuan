<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 1.声明props 获取数据模型(model)和校验规则对象

export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  created () {
    //缓存需要校验的表单项
      this.fileds = [];
      this.$on('formItemAdd',item=>{
          this.fileds.push(item);
      })
  },
  methods: {
      validate(callback) {
        // 获取所有的验证结果统一处理,只要有一个失败就失败
        // tasks保存着验证之后的多个promise对象
        const tasks = this.fileds.map(item=>item.validate());
        let ret = true;
        Promise.all(tasks).then(results=>{
            results.forEach(valid=>{
                if(!valid){
                    ret = false
                }
            })
            callback(ret)
        })
      }
  },
};
</script>

<style lang="scss" scoped>
</style>