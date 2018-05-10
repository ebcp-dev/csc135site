<template>
  <v-app id="app">
    <v-toolbar color="green darken-4" dark app>
      <v-toolbar-title>Earl Perez</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat href="#assignments">Assignments</v-btn>
        <v-btn flat href="#rdp">Recursive Descent Parser</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout wrap justify-center >
          <v-flex xs12 lg12 md12>
            <Intro />
            <Knowledge />
            <br />
            <v-card id="assignments" color="green darken-1">
                <v-card-text class="px-0">
                    <h3 class="headline mb-0">Assignments</h3>
                </v-card-text>
                <v-expansion-panel expand>
                  <v-expansion-panel-content>
                    <div slot="header">PL Assignment 1</div>
                    <PL1 />
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">PL Assignment 3</div>
                    <PL3 />
                  </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card>
            <br />
            <PL4 id="rdp" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer height="50" color="green darken-4" app>
      <v-layout justify-center>
        <span class="white--text">Computing Theory and Programming Languages</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Intro from './components/Intro'
import Knowledge from './components/Knowledge'
import PL1 from './components/PL1'
import PL3 from './components/PL3'
import PL4 from './components/PL4'

export default {
  name: 'App',
  components: {
    Intro,
    Knowledge,
    PL1,
    PL3,
    PL4
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFF;
}
</style>
