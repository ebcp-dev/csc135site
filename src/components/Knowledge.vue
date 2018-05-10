<template>
  <div class="knowledge">
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex >
                <v-card color="green darken-1">
                    <v-card-text class="px-0">
                        <h3 class="headline mb-0">Languages</h3>
                    </v-card-text>
                    <v-list class="content-card" v-for="lang in languages" :key="lang.name">
                        {{ lang.name }}
                    </v-list>
                </v-card>
                <br />
                <v-card color="green darken-1">
                    <v-card-text class="px-0">
                        <h3 class="headline mb-0">Interests</h3>
                    </v-card-text>
                    <v-list class="content-card" two-line v-for="intr in interests" :key="intr.name">
                        <v-container>
                            {{intr.name}}:
                            {{intr.why}}
                        </v-container>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Knowledge',
  data () {
    return {
        languages: [
            { name: 'Java' },
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'HTML/CSS' },
            { name: 'SQL' }
        ],
        interests: [
            {
                name: 'Elixir',
                why: 'Elixir is a functional programming language that is very easy to follow. Learning functional programming helps you approach problems from a different perspectives.'
            },
            {
                name: 'Go',
                why: 'Go is a language released by Google in 2009 and is growing in popularity due to its focuse on simplicity, conciseness, readability, concurrency and performance.'
            },
            {
                name: 'C#',
                why: 'C# is a versatile object-oriented language that is used by many industries, from web development to graphics programming.'
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
.content-card {
    min-height: 55px;
}
</style>
