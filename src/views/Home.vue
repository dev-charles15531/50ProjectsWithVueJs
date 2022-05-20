<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 py-8 px-12 pb-5 w-2/6 border-2 border-gray-300 rounded">
        <div class="w-full mb-5">
          <input v-model="state.number" type="text" class="w-full h-12 font-mono px-4 text-xl font-semibold border outline-none rounded">
        </div>
        
        <div class="w-full grid grid-cols-3 gap-3">
          <div @click="getPressed(i)" v-for="i in 9" class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">{{ i }}</div>
          <div @click="getPressed(0)" class="col-span-2 bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">0</div>
          <div @click="determineOperation('+')"  class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">+</div>
          <div @click="determineOperation('-')" class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">-</div>
          <div @click="determineOperation('*')" class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">x</div>
          <div @click="determineOperation('/')" class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">/</div>
          <div @click="clear" class="col-span-2 bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">C</div>
          <div @click="calculate" class="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded">=</div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'

export default {
  setup () {
    const state = reactive({
      number: "0",
      initOperand: "",      // Initial operand
      finOperand: "",       // Final operand
      operator: "",
      result: "",
    })

    /**
     * Get the user clicked or pressed number
     */
    const getPressed = (number)=> {

      // So the system clears itself if the user input any number when result is already on screen
      if(state.initOperand.toString().length && state.number.toString().length && state.result.toString().length && !state.operator.length)
        clear()
      if(state.number == 0 && !state.operator.length) 
        state.number = ""
      else if(state.number >= 0 && state.operator.length) {
        state.initOperand = state.number
        state.number = ""
      }

      state.finOperand = state.number += number;
    }

    /**
     * Clear the calculator screen
     */
    const clear = ()=> {

      // Clear all data fields
      state.number = "0"
      state.initOperand = ""
      state.operator = ""
      state.finOperand = ""
      state.result = ""
    }

    /**
     * Add the initial and final operand
     */
    const sum = ()=> {
      return state.result = (parseInt(state.initOperand) + parseInt(state.finOperand))
    }

    /**
     * Subtract final operand from the initial operand
     */
    const subtract = ()=> {
      return state.result = (state.initOperand - state.finOperand)
    }

    /**
     * Multiply the initial and final operand
     */
    const multiply = ()=> {
      return state.result = (state.initOperand * state.finOperand)
    }

    /**
     * Divide the initial operand by the final operand
     */
    const divide = ()=> {
      return state.result = (state.initOperand / state.finOperand)
    }

    /**
     * Determines the operation to carry out on the two operands
     */
    const determineOperation = (operator)=> {
      state.operator = operator
    }

    /**
     * Determine which calculation is to be peformed
     */
    const calculate = ()=> {
      if(!state.operator.length)
        return

      if(state.operator === "+") 
        sum()
      else if(state.operator === "-")
        subtract()
      else if(state.operator === "*")
        multiply()
      else if(state.operator === "/")
        divide()

      // Display result and set initial operand to result value
      state.number = state.result
      state.initOperand = state.number
      
      // Empty operator and final operand value
      state.operator = ""
      state.finOperand = ""
    }


    onMounted(() => {
      window.addEventListener('keydown', (e)=> {
        let numbers = [0,1,2,3,4,5,6,7,8,9]
        let operators = ["+", "-", "/", "*"]

        let val = e.key

        if(numbers.includes(parseInt(val)))
          getPressed(val)
        else if(operators.includes(val))
          determineOperation(val)
        else if(val === "=" || val === "Enter")
          calculate()
        else if(val === "Delete")
          clear()

        return
      });
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', (e)=>{});
    });

    return {state, getPressed, determineOperation, clear, sum, subtract, multiply, divide, calculate}
  }
}
</script>

<style lang="scss" scoped>

</style>