<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="operand1" />
      <input type="number" v-model.number="operand2" />
      = {{ result }}
      <br />
      <!-- fibResult = {{ fibResult }} -->
    </div>

    <div class="keyboard">
      <button
        v-for="operation in operations"
        :key="operation"
        :disabled="operand1 === '' || operand2 === ''"
        @click="calculate(operation)"
      >
        {{ operation }}
      </button>

      <!-- <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button> -->
    </div>

    <div v-if="error" :class="{ error: !!error }">
      Ошибка!
      {{ error }}
    </div>

    <!-- <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div> -->

    <!-- <div>fib1 - {{ fibb1 }} fib2 - {{ fibb2 }}</div> -->

    <div class="vir_keyboard">
      <label>
        <input type="checkbox" id="checkbox" v-model="checked" />
        Отобразить экранную клавиатуру
      </label>
      <!-- <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label> -->
      <br />
      <br />
      <div v-show="checked">
        <button v-for="btn in 10" :key="btn" @click="enterNum(btn - 1)">
          {{ btn - 1 }}
        </button>
        <button @click="backspace">←</button>
        <div>
          <br />
          <label>
            <input type="radio" id="one" value="operand1" v-model="picked" />
            Операнд 1
          </label>
          <label>
            <input type="radio" id="two" value="operand2" v-model="picked" />
            Операнд 2
          </label>
        </div>
      </div>
    </div>

    <!-- <div class="logs">
      <div v-for="(log, id) in logs" v-bind:key="id">{{ id }} - {{ log }}</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      fibResult: 0,
      error: "",
      operations: ["+", "-", "*", "/", "**", "%"],
      logs: {},
      checked: false,
      picked: "operand1",
    };
  },
  methods: {
    add() {
      this.result = +this.operand1 + +this.operand2;
      this.fibResult = this.fibb1 + this.fibb2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
      this.fibResult = this.fibb1 - this.fibb2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (+operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = operand1 / operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    exp() {
      this.result = this.operand1 ** this.operand2;
    },
    intDiv() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.exp();
          break;
        case "%":
          this.intDiv();
          break;
      }
      //this.logs[Date.now()] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      this.$set(this.logs, key, value);
    },

    // fib(n) {
    //   return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    // },

    enterNum(btn) {
      if (this.picked === "operand1") {
        this.operand1 += String(btn);
      } else {
        this.operand2 += String(btn);
      }
    },
    backspace() {
      if (this.picked === "operand1") {
        // this.operand1 = String(this.operand1).length - 1;
        this.operand1 = this.operand1.slice(0, this.operand1.length - 1);
      } else {
        // this.operand2 = String(this.operand2).length - 1;
        this.operand2 = this.operand2.slice(0, this.operand2.length - 1);
      }
    },
  },
  //   computed: {
  //     fibb1() {
  //       return this.fib(this.operand1);
  //     },
  //     fibb2() {
  //       return this.fib(this.operand2);
  //     },
  //   },
};
</script>

<style scoped lang='sass'>
.error
	color: red
.vir_keyboard
	margin-top: 30px
</style>