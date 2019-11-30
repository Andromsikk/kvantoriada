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

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

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
        <h3> Счета Квитанции</h3> 
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