import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
 { 
  icon: <HomeModernIcon className="h-6 w-6" />,
  title: "state of the Art Facilities",
  description: "Our facilities are designed to provide a comfortable and productive workout environment.",
 },
 {
  icon: <UserGroupIcon className="h-6 w-6"/>,
  title: "100's of Diverse Classes",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio neque culpa",
 },
 {
  icon: <AcademicCapIcon className="h-6 w-6"/>,
  title: "Expert and Pro Trainers",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio neque culpa",
 } 
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }
  }
}


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ( {setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          className="md:my-5 md:w-3/5"
           initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.1, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 }
            }}  
        >
          <HText>More than just a gym</HText>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis animi, 
            repudiandae molestias error tempora laborum hic iusto quibusdam fugit aut nemo debitis 
            natus aliquam omnis, voluptate temporibus similique architecto.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7  }}
                  transition={{  duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 60 },
                    visible: { opacity: 1, x: 0 }
                  }}  
                >
                  <HText>
                    Milions of happy members getting {" "} <span className="text-primary-500">Fit</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7  }}
              transition={{ delay: 0.4, duration: 1 }}
              variants={{
               hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 }
              }}  
            >
              <p className="my-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In neque iure quos, 
                totam aliquid inventore corrupti soluta sapiente cumque, impedit, quod ipsa voluptas 
                quo nemo? Magnam sequi consectetur delectus nesciunt?
              </p>
              <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus nisi cum, 
                maxime a voluptas earum molestias quam eveniet rem.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;