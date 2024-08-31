import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-99%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 h-screen bg-white flex overflow-hidden items-center">
        <motion.div style={{ x }} className="flex gap-4">
          {cardArray.map((card) => (
            <Reveal key={card.id} width="100%">
              <Card cardArray={card} />
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const Card = ({ cardArray }: { cardArray: CardType }) => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${cardArray.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="inset-0 absolute  bg-transparent h-screen z-0 transition-transform duration-300 transform hover:scale-110"
      ></div>
      <div className="inset-0 absolute z-0 grid place-content-center">
        <p className="bg-black text-white px-4 py-2 rounded-md ">
          {cardArray.title}
        </p>
      </div>
    </div>
  );
};

const cardArray: CardType[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1684262483991-caa62798fe85?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl2YWx8ZW58MHwwfDB8fHww",
    title: "LEGO Minifigures",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1688301361663-459cbd8d40d1?q=80&w=3894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LEGO Bricks",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1694370806388-e372ee118336?q=80&w=3906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LEGO City",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1694370001195-927f267e33a4?q=80&w=3888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LEGO Star Wars",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=3999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LEGO Architecture",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1577083300575-b42d4598b25b?q=80&w=3683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LEGO Technic",
  },
];

export default HorizontalScroll;
