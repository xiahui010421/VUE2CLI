export const obj = {
    //插件的安装方法
    //vue.use(obj)时会自动调用install方法
    install(vue){
        console.log("Plugin installed",vue);
        //全局过滤器
        vue.filter('myslice',function(value){
            return value.slice(0,4);
        });
        //全局自定义指令
        vue.directive('fbind', {
            bind(el, binding, ) {
                el.value = binding.value;   
            },
            inserted(el) {
                el.focus();
            },
            update(el, binding) {
                el.value = binding.value;
            }
        });
        //全局混入
        vue.mixin({
            data() {
                return {
                    name: 'xiahui',
                    address: 'shanghai',
                    phone: '123456789'
                }
            }
        });
        //给vue原型添加方法（vm vc都可以使用） 
        vue.prototype.hello = function() {
            alert('Hello from plugin!');
        };
    }
}