<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Available Meal Plans</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="../assets/breakfast.jpg" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">BreakFast</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">BreakFast</h3>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque sed commodi sint corrupti sit est earum expedita
                iusto nisi assumenda, esse veniam corporis dolorum veritatis
                repellendus error architecto modi.
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="green" class="btn" @click="showRecipes('paleo')"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="../assets/lunch.jpg" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Lunch</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Lunch</h3>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque sed commodi sint corrupti sit est earum expedita
                iusto nisi assumenda, esse veniam corporis dolorum veritatis
                repellendus error architecto modi.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn block color="green" class="btn" @click="showRecipes('paleo')"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="../assets/supper.jpeg" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Dinner</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Dinner</h3>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque sed commodi sint corrupti sit est earum expedita
                iusto nisi assumenda, esse veniam corporis dolorum veritatis
                repellendus error architecto modi.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn block color="green" class="btn" @click="showRecipes('vegan')"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios';
export default {
  name: "HomeMealPlans",
  methods: {
    showRecipes(plan) {
      this.$store.dispatch("getRecipes", plan);
    }
  }
};
</script>

<style scoped>
.btn {
  border: 2px solid;
  border-color: green;
  color: green;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  color: white;
}
</style>
