<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-layout
                text-center
                wrap
        >

          <v-flex mb-4>
            <h1 class="display-2 font-weight-bold mb-3">
              Welcome to POLLs
            </h1>
            <p class="subheading font-weight-regular">
              Service to manage your polls in one place
            </p>
            <v-layout row class="text-xs-center"
                      text-center
                      wrap
            >
              <v-flex xs-2>
                <v-card flat>
                       



                      <v-form>
                        <v-container fluid>
                          <v-row>

                            <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="пароль"
                                hint="At least 4 characters"
                                counter
                                @click:append="show1 = !show1"
                              ></v-text-field>
                            </v-col>

                            
                           

                          </v-row>
                        </v-container>
                      </v-form>






                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-col>
               
      <v-spacer></v-spacer>
      <v-col cols="12" sm="8" md="8">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
                  color="purple lighten-2"
                  fill-dot
                  right
          >
            <v-card>
              <v-card-title class="purple lighten-2">
                <v-icon
                        dark
                        size="42"
                        class="mr-4"
                >
                  mdi-account
                </v-icon>
                <h2 class="headline white--text font-weight-light">Sign UP</h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    Sign UP or login in polls
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
                  color="green lighten-1"
                  fill-dot
                  right
          >
            <v-card>
              <v-card-title class="green lighten-1">
                <v-icon
                        dark
                        size="42"
                        class="mr-4"
                >
                  mdi-view-grid-plus-outline
                </v-icon>
                <h2 class="headline white--text font-weight-light">Add your subs</h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    Take polls from different companies
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
                  color="cyan lighten-1"
                  fill-dot
                  right
          >
            <v-card>
              <v-card-title class="cyan lighten-1">
                <v-icon
                        class="mr-4"
                        dark
                        size="42"
                >
                  mdi-file-tree
                </v-icon>
                <h2 class="headline white--text font-weight-light">Manage</h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    Bla bla bla
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>




<style>
  .v-application .mb-6 {
    margin-bottom: 26px !important;
  }
</style>



<script>

 
  
  export default {
    data () {
      return {
        show1: false,
      
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 4 || 'Min 4 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
  }
</script>
