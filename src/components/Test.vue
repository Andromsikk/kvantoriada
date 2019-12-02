
<template>
  

                <v-card flat>
                      
        <v-col class="d-flex ma-0 pa-0 algin-center" cols="12" sm="8">
            <h3 class=" pl-6">Трек:</h3>
            <v-select
            :items="items"
            label="Выберети музыку"
            class="ma-0 pa-0 ml-3 "
            ></v-select>
        </v-col>

        
                </v-card>
</template>





<script>
  /*export default {
    data: () => ({
      items: ['Колесо обозрения', 'Сцена', 'Радио', 'Освещение','Умная грядка','Admin'],
    }),
  }*/
</script>




<script>
  export default {
    data: () => ({
      items: ['Колесо обозрения', 'Сцена', 'Радио', 'Освещение','Умная грядка','Admin'],
    }),
  }
</script>

