function processNumbers(n1,n2,callback){
    console.log("sum : ",callback(n1,n2))
  }
  function callback(x,y){
      add = x+y
      return add
  }
  processNumbers(3,4, callback)
  
  //========================================
  function greet(callback){
      a = " Hello, "+callback+" !"
      console.log(a)
  }
  function callback(name){
      return name
  }
  greet(callback("Alice"))
  
  
  
  //======================================
  
  
  function calculate(n1,n2,callback){
      a = "Difference: " + callback(n1,n2)
      console.log(a)
  }
  callback = (x,y) => {
      return x -y 
  }
  calculate(10,5,callback)