
<template>
  <div class="content">
    <div class="preview">
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src" >
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left">
          <img :src="selectedRobot.torso.src">
          <img :src="selectedRobot.rigtArm.src" class="rotate-right">
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src">
        </div>
      </div>
    </div>
  </div>
    <div>

        <button class="add-to-cart" @click="addToCart()">В КОРЗИНУ</button>
        <div class="top-row">
            <div class="top part">
                <div class="robot-name">
                  {{ selectedRobot.head.title }}
                  <span v-if="selectedRobot.head.onSale" class="sale">

                    SALE! 

                  </span>
                </div>
                <img :src="selectedRobot.head.src" title="head">
                <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
                <button @click="selectNextHead()" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <img :src="selectedRobot.leftArm.src" title="left arm">
                <button @click="selectPreviousArm()" class="prev-selector">&#9650;</button>
                <button @click="selectNextArm()" class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <img :src="selectedRobot.torso.src" title="torso">
                <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
                <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <img :src="selectedRobot.rigtArm.src" title="right arm">
                <button @click="selectPreviousArmR()" class="prev-selector">&#9650;</button>
                <button @click="selectNextArmR()" class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <img :src="selectedRobot.base.src" title="base">
                <button  @click="selectNextBase" class="prev-selector">&#9668;</button>
                <button @click="selectPreviousBase" class="next-selector">&#9658;</button>
            </div>
        </div>


        <div>
          <h3 class="h3">КОРЗИНА</h3>
          <table>
            <thead>
              <tr>
                <th>Робот</th>
                <th class="cost">Цена</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="robot in cart">
                <td>{{ robot.head.title }}</td>
                <td>{{ robot.cost }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
    import availableParts from '../data/parts'

    function getPreviousValidIndex(index,lenght){
      const decIndex = index -1
      return decIndex <0 ? lenght -1 : decIndex
    }
    function getNextValidIndex(index,lenght){
      const incIndex = index +1
      return incIndex > lenght - 1 ? 0 : incIndex
    }
    export default {
        name: 'RobotBuilder',
        data(){
            return{
                availableParts,
                cart: [],
                selectedHeadIndex:0,
                selectedLeftArmIndex:0,
                selectedTorsoIndex:0,
                selectedRightArmIndex:0,
                selectedBaseIndex:0,
            }
        },
        computed:{
          selectedRobot(){
            return{
              head:availableParts.heads[this.selectedHeadIndex],
              leftArm: availableParts.arms[this.selectedLeftArmIndex],
              torso: availableParts.torsos[this.selectedTorsoIndex],
              rigtArm:availableParts.arms[this.selectedRightArmIndex] ,
              base:availableParts.bases[this.selectedBaseIndex] ,


            }
          } 

        },
        methods:{

          addToCart(){
            const robot = this.selectedRobot
            const cost = robot.head.cost +robot.leftArm.cost+robot.torso.cost+robot.rigtArm.cost+robot.base.cost;
            this.cart.push(Object.assign({}, robot, {cost}))
          },
          selectNextHead(){
            this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex,availableParts.heads.length)
          },
          selectPreviousHead(){
            this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex,availableParts.heads.length)
          },

          selectNextArm(){
            this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex,availableParts.arms.length)
          },
          selectPreviousArm(){
            this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex,availableParts.arms.length)
          },

          selectNextTorso(){
            this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex,availableParts.torsos.length)
          },
          selectPreviousTorso(){
            this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex,availableParts.torsos.length)
          },



          
          selectNextArmR(){
            this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex,availableParts.arms.length)
          },
          selectPreviousArmR(){
            this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex,availableParts.arms.length)
          },
          
          selectNextBase(){
            this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex,availableParts.bases.length)
          },
          selectPreviousBase(){
            this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex,availableParts.bases.length)
          },



        }
    }
</script>

<style>
.rotate-left{
  transform: rotate(-90deg);
}
.rotate-right{
  transform: rotate(90deg);
}
.preview{
  position: absolute;
  top: -20px;
  right:0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content{
  border: 1px solid #999;
}
.preview img{
  width: 50px;
  height: 50px;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale{
  color: red;
}
.content{
  position: relative;
}
.add-to-cart{
  /* position: absolute; */
  right: 330px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
td,th{
  text-align: left;
  padding: 5px;
  padding-right: 20px;

}
.cost{
  text-align: right;

}
h3{
  padding-left: 8px;
  text-align: left;
}
</style>