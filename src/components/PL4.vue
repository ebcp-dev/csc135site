<template>
    <div class="pl4">
        <v-container grid-list-md text-xs-center>
            <v-card color="green darken-1">
                <v-card-text class="px-0">
                    <h3 class="headline mb-0">Recursive Descent Parser</h3>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-text class="px-0">
                    <h2>This parser is based on the grammar:</h2>
                    <p>EXP ::= EXP + TERM | EXP - TERM | TERM</p>
                    <p>TERM ::= TERM * FACTOR | TERM/FACTOR | FACTOR</p>
                    <p>FACTOR ::= (EXP) | DIGIT</p>
                    <p>DIGIT ::= 0 | 1 | 2 | 3</p>
                    <h2>Instructions:</h2>
                    <p>Enter string into the input box. String can only contain digits 0-3, (), +, -, /, * and $. Strings must be terminated using the $ symbol and have no whitespaces.</p>
                    <p>Example valid strings: 1+2$, 0-3*2$, 2/(3+1)$</p>
                    <p>Example invalid strings: 1+2, 1*4$, 1*a$</p>
                    <h2>Parser:</h2>
                </v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-container>
                        <v-text-field label="string" v-model="string" :rules="stringRules" :counter="20" required></v-text-field>
                        <h3 id="result"></h3>
                        <br />
                        <v-btn :disabled="!valid" @click="submit">submit
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </v-container>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import validate from '../utility/validation.js'
export default {
    name: 'PL4',
    data: () => ({
        valid: true,
        string: '',
        stringRules: [
        ]
    }),
    methods: {
        submit() {
            let string = this.string
            let res = validate.check(string)
            document.getElementById("result").innerHTML = res
            console.log(res)
        },
        clear () {
            this.$refs.form.reset()
        },
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
}
#result {
    color: red
}
</style>
