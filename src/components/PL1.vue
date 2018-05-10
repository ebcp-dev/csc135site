<template>
    <div class="pl1">
        <v-container grid-list-md text-xs-center>
            <v-card color="green darken-1">
                <v-card-text class="px-0">
                    <h3 class="headline mb-0">Definitions</h3>
                </v-card-text>
                <v-list three-line v-for="word in definitions" :key="word.term">
                    <v-container>
                        <p class="title">{{ word.term }}</p>
                        <p class="subheading">{{ word.definition }}</p>
                        <p class="body-2">Source: {{ word.source }}</p>
                    </v-container>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'PL1',
    data () {
        return {
            definitions: [
                {
                    term: 'Syntax',
                    definition: 'Aspects of a programming language that can be modeled by a context-free grammar.',
                    source: 'An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.3'
                },
                {
                    term: 'Semantics',
                    definition: 'How we interpret the meaning of a particular construct.',
                    source: 'An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.3'
                },
                {
                    term: 'Lexical Scanning',
                    definition: 'Process of converting a sequence of characters into a sequence of tokens.',
                    source: 'https://en.wikipedia.org/wiki/Lexical_analysis'
                },
                {
                    term: 'Parsing',
                    definition: 'Explaining a sentence through its grammatical derivation from a study of natural languages.',
                    source: 'An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.1'
                },
                {
                    term: 'Parser',
                    definition: 'A parser takes an input of tokens to build a data structure.',
                    source: 'https://www.techopedia.com/definition/3854/parser'
                }
            ]
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
}
</style>
