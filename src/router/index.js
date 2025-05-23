import { createRouter,
    createWebHashHistory

 } from "vue-router";

import HomePage from "@/home/HomePage.vue"
import RobotBuilder from "@/build/RobotBuilder.vue";
import Partinfo from "@/parts/partinfo.vue";
import QRcode from "@/build/QRcode.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        name: "main",
        component: HomePage,

    },{
        path: "/build",
        name: "create",
        component: RobotBuilder,
    },{
        path:"/qrcode",
        name: "qr",
        component: QRcode,
    },
    {
        path: "/part/partType/:id",
        name: "запчасти",
        component: Partinfo,
    }]
})