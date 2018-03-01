<template>
  <div class="intro">
    <v-jumbotron color="white" >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <v-avatar size="150">
              <img src="https://d1qb2nb5cznatu.cloudfront.net/users/4449170-large?1479371603" alt="avatar" />
            </v-avatar>
            <h3 class="display-3">{{ name }}</h3>
            <h3 class="subheading">{{ email }}</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="subheading">{{ intro }}</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      name: 'Earl Perez',
      email: 'ebcperezcsc@gmail.com',
      intro: 'I am a Computer Science student at Sacramento State University. My hobbies include playing and watching basketball (go Lakers). My arbitrary career goal as of now is to make enough money to buy a Lambo.'
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
