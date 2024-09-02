import React from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const Card = ({ cardArray }: { cardArray: CardType }) => {
  return (
    <div
      key={cardArray.id}
      className="w-[450px] h-[450px] relative overflow-hidden"
    >
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${cardArray.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="inset-0 absolute z-0 transition-transform duration-300 transform hover:scale-110"
      ></div>
      <div className="inset-0 absolute z-0 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/80">
          {cardArray.title}
        </p>
      </div>
    </div>
  );
};


const cardArray: CardType[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1574169208507-843761648a78",
    title: "LEGO Minifigures",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1591022671866-40880028bb6c",
    title: "LEGO Bricks",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1589227365534-c68f4e34793d",
    title: "LEGO City",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1601900953577-0c234ed7d0cd",
    title: "LEGO Star Wars",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1611836892276-fd5ea8585f0c",
    title: "LEGO Architecture",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1612046826246-9050fa8e9644",
    title: "LEGO Technic",
  },
];
