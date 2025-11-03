import { animate } from "framer-motion";


export const Fadup = (delay) =>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible: {
            opacity :1,
            y:0,
            transition:{
                duration:1,
                delay: delay,
            },
        },
    };

};
export const Fadleft = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible: {
            opacity :1,
            x:0,
            transition:{
                duration:1,
                delay: delay,
            },
        },
    };

};
export const Fadright = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:-100,
        },
        visible: {
            opacity :1,
            x:0,
            transition:{
                duration:1,
                delay: delay,
            },
        },
    };

};
export const iconVarients=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease :"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})
export const Faddown = delay =>{
    return{
        hidden:{
            opacity:0,
            y:-100,
        },
        visible: {
            opacity :1,
            y:0,
            transition:{
                duration:1,
                delay: delay,
            },
        },
    };

};