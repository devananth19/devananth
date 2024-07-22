import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiHtml5, SiCss3, SiFigma, SiBootstrap, SiGithub } from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) =>({
    intial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
                <div className="border-b border-neutral-800 pb-24">
                <motion.h2  
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Technologies
                </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-lg border-4 border-neutral-800 p-3">
                        <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiJavascript className="text-5xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiHtml5 className="text-5xl text-red-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiCss3 className="text-5xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiFigma className="text-5xl text-purple-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiBootstrap className="text-5xl text-purple-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-lg border-4 border-neutral-800 p-3">
                    <SiGithub className="text-5xl text-gray-800" />
                </motion.div>
            </div>
        </div>
  )
}

export default Technologies
