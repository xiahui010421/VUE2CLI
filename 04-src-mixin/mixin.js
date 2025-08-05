export const mixin = {
  data() {
    return {
      x:100,
      y:200,
      name: "Default Name",
      address: "Default Address",
      phone: "Default Phone"
    };
  },
  methods: {
    showMsg() {
      console.log('clicked');
      alert(`Name: ${this.name}, Address: ${this.address}, Phone: ${this.phone}`);
    }
  }, 
}