<template>
    <div class="qr-wrapper">
        <h2>QR-code on port</h2>
        <canvas ref="canvas"></canvas>
        <p>scan qrcode</p>
        <button class="visit-btn" @click="visitSite"> Перейте на QRcode</button>
    </div>
</template>

<script>
import QRcode from "qrcode"

export default{
    name: "QRcode",
    data(){
        return{
            url: "https://ornstein77.github.io/vue-robot/"
        }
    },
    mounted(){
        const canvas = this.$refs.canvas;
        if ( canvas){
            QRcode.toCanvas(canvas,this.url,{width:180},(error) =>{
                if (error) console.error(error)
            })
        }
    },
    methods:{
        visitSite(){
            window.open(this.url, "_blank")
        }
    }

}
</script>