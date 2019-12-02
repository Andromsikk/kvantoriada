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
                class="ma-0"
                ></v-slider>
              
        </v-container>
        
    </section>


        <section>
              <v-expansion-panels
        v-model="panel"
        :disabled="disabled"
        multiple
      >
        <v-expansion-panel>
          <v-expansion-panel-header>Ваш тариф</v-expansion-panel-header>
          <v-expansion-panel-content>
            Some content
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header>Счет на оплату</v-expansion-panel-header>
          <v-expansion-panel-content>
            Some content
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header>Квитанции на оплату</v-expansion-panel-header>
          <v-expansion-panel-content>
            Some content
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
           
        </section>        

                

     

   



    
    




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
