'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this)
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let obj2 = arg.obj1;  
    let people = Object.assign({}, obj2);
    people.firstName = "Petr";
    people.relatives[1].lastName = "Petrova";
    return {obj2, people};
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let combo = {...arg.obj1, ...arg.obj2};
    let obj1 = arg.obj1;
    let obj2 = arg.obj2;
    obj1.a = 100;
    obj2.b = 200;
    return {obj1, obj2, combo};
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    arg.obj1.relatives.forEach(relative => {
        if (relative.lastName === "Ivanov"){
            relative.gender = "male";       
        } else {
            relative.gender = "female";
        }
    });
    return arg;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    let people = [];
    let females = arg.obj1.relatives.reduce((helloArr, relative) => {
  			relative.gender === "female" ? helloArr = [...helloArr,(`Hi, ${relative.firstName} ${relative.lastName}!`)] : people;
        return helloArr;
  		}, people);
    return females
  }
}

export default OperationExecutor;
