import { ClassType } from '@/shared/types';
import { SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType>  = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus quos magnam eius soluta nesciunt aperiam vitae corrupti", 
    image: image1,
  },
   {
    name: "Yoga Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus quos magnam eius soluta nesciunt aperiam vitae corrupti", 
    image: image2,
  },
   {
    name: "Ab core Classes",
    image: image3,
  },
   {
    name: "Adventure Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus quos magnam eius soluta nesciunt aperiam vitae corrupti", 
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
   {
    name: "Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus quos magnam eius soluta nesciunt aperiam vitae corrupti", 
    image: image6,
  },
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage}: Props) => {
  return (
    <section 
      id='ourclasses'
      className='w-full bg-primary-100 py-40'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className='md:w-3/5'>
            <HText>Our Classes</HText>
            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nesciunt beatae commodi earum sed soluta ullam sint neque ipsum excepturi,
              necessitatibus corporis non deserunt. Quasi, repudiandae.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default index