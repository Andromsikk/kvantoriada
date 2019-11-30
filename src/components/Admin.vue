<template>
  <v-card
    class="mx-auto my-10"
    max-width="400"
  >
    <v-img
      src="https://cdn.pixabay.com/photo/2015/04/23/17/18/disney-736374__480.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      ВЫ: Сцена
    </v-card-title>

   
    <section>
        <v-container fluid class="d-flex mb-0 pb-0">
            <h3 class="pl-3">Подача тока</h3>
            <v-switch v-model="switch1" :label="``" class="ma-0 ml-3 pa-0"></v-switch> on
            
        </v-container>
        
          

        <v-col class="d-flex ma-0 pa-0 algin-center" cols="12" sm="8">
            <h3 class=" pl-6">Трек:</h3>
            <v-select
            :items="items"
            label="Выберети музыку"
            class="ma-0 pa-0 ml-3 "
            ></v-select>
        </v-col>

        <v-container fluid class="d-flex mb-0 pb-0">
            <h3 class="pl-3">Громкость:</h3>
             
               
                <v-slider
                v-model="slider"
                thumb-label
                class="pl-1 ma-0"
                ></v-slider>
              
        </v-container>
    </section>


    <v-card-actions>
         <v-card-text class="py-0">
        <h3>Ваш тариф</h3> 
        </v-card-text>
        

        <v-spacer></v-spacer>
        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-card-actions>


   

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But
        </v-card-text>
            </div>
    </v-expand-transition>

    <v-card-actions>
          <v-card-text class="py-0">
        <h3>Счет на Оплату</h3> 
        </v-card-text>
        
         <v-spacer></v-spacer>
        <v-btn
                icon
                @click="show2 = !show2"
            >
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
    </v-card-actions>



    <v-expand-transition>
        <div v-show="show2">
        <v-divider></v-divider>
        <v-card-text>
        I'm a thing. But
        </v-card-text>
        </div>
    </v-expand-transition>

    <v-card-actions>
          <v-card-text class="py-0">
        <h3>Счета Квитанции</h3> 
        </v-card-text>
        
         <v-spacer></v-spacer>
        <v-btn
                icon
                @click="show3 = !show3"
            >
                <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
    </v-card-actions>

     <v-expand-transition>
        <div v-show="show3">
        <v-divider></v-divider>
        <v-card-text>
        I'm a thing. But
        </v-card-text>
        </div>
    </v-expand-transition>
    




  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      show2: false,
      show3: false,
    }),
  }
</script>

<script>
  export default {
    data () {
      return {
        switch1: false,
        switch2: false,
      }
    },
  }
</script>


<script>
  export default {
    data: () => ({
      items: ['Человечская музыка', 'Шрек musik', 'Jazz', 'Rock'],
    }),
  }
</script>

