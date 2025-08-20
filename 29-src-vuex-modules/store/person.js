import axios from "axios"
import { nanoid } from "nanoid"
export default{
  namespaced:true,
  actions:{
    addPersonWang(context,value){
      if(value.name.indexOf('wang') === 0){
        context.commit('ADD_PERSON',value)
      }else{
        alert("wang")
      }
    },
    addPersonServe(context) {
        // 本地模拟数据（避免依赖外部接口）
        const mockNames = ['赵晓阳', '孙雨桐', '周宇航', '吴诗涵', '郑子轩'];
        const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
        context.commit('ADD_PERSON', {
            id: nanoid(),
            name: randomName
        });
    }
  },
  mutations:{
    ADD_PERSON(state,value){
      console.log('addperson ....')
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[
      {id:'001',name:'zhangsan'},
    ]
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  },
}