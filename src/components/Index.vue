<template>
     <v-card
    class="mx-auto my-10"
    max-width="400"
  >
    <v-img
      src="http://rk.karelia.ru/wp-content/uploads/2019/11/p8tv0lom4xcsg808s0k-1280x720.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Кванториада 2019
    </v-card-title>
    <v-card-subtitle class=" pl-5">
        Карельские Энергетики
      </v-card-subtitle>
  

   
 
        
        
            


            <v-col class="d-flex ma-0 pa-0 algin-center" cols="12" sm="8">
        
              <v-select
              :items="items"
              label="Имя пользователя"
              class="ma-0 pa-0 ml-6 "
              ></v-select>
          </v-col>
   <section class="d-flex ">
           <v-col cols="12" sm="6" class="ma-0 pa-0 pl-6 d-flex">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="пароль"
                hint="At least 4 characters"
                counter
                class="ma-0 pa-0 "
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
           
            <span class="ma-0 pa-0 pl-5 mb-5 d-flex"><v-btn color="cyan lighten-1 " text>Войти</v-btn></span>

          

    </section>


  
                

     

   



    
    




  </v-card>
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
        items: ['Колесо обозрения', 'Сцена', 'Радио', 'Освещение','Умная грядка','Admin'],
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


