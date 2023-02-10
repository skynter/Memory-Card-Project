import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import naruto from "./img/naruto.png";
import sasuke from "./img/sasuke.png";
import kakashi from "./img/kakashi.png";
import yahiko from "./img/yahiko.png";
import itachi from "./img/itachi.png";
import obito from "./img/obito.png";
import jiraya from "./img/jiraya.jpg";
import gaara from "./img/gaara.jpg";
import madara from "./img/madara.jpg";
import tsunade from "./img/tsunade.png";
import minato from "./img/minato.jpg";
import oroshimaru from "./img/oroshimaru.jpg";

function App() {
  useEffect(() => {
    initialSortMount();
  }, []);

  const [cardArray, setCardArray] = useState([
    {
      mainColor: "bg-red-800",
      secondaryColor: "bg-red-300",
      title: "Naruto Uzumaki",
      imgSrc: naruto,
      key: 1,
      number: 1,
      index: 10,
      isClicked: "false",
    },
    {
      mainColor: "bg-gray-700",
      secondaryColor: "bg-gray-600",
      title: "Sasuke Uchiwa",
      isClicked: "false",
      imgSrc: sasuke,
      key: 2,
      number: 2,
      index: 20,
    },
    {
      mainColor: "bg-zinc-400",
      secondaryColor: "bg-zinc-300",
      title: "Kakashi Hatake",
      imgSrc: kakashi,
      key: 3,
      number: 3,
      index: 30,
      isClicked: "false",
    },
    {
      mainColor: "bg-orange-400",
      secondaryColor: "bg-orange-300",
      title: "Yahiko Uzumaki",
      imgSrc: yahiko,
      key: 4,
      number: 4,
      index: 40,
      isClicked: "false",
    },
    {
      mainColor: "bg-sky-700",
      secondaryColor: "bg-sky-300",
      title: "Itachi Uchiwa",
      imgSrc: itachi,
      key: 5,
      number: 5,
      index: 50,
      isClicked: "false",
    },
    {
      mainColor: "bg-stone-900",
      secondaryColor: "bg-stone-500",
      title: "Obito Uchiwa",
      imgSrc: obito,
      key: 6,
      number: 6,
      index: 60,
      isClicked: "false",
    },
    {
      mainColor: "bg-emerald-800",
      secondaryColor: "bg-emerald-400",
      title: "Jiraya of the Sannin",
      imgSrc: jiraya,
      key: 7,
      number: 7,
      index: 70,
      isClicked: "false",
    },
    {
      mainColor: "bg-amber-900",
      secondaryColor: "bg-amber-600",
      title: "Gaara of the Sand",
      imgSrc: gaara,
      key: 8,
      number: 8,
      index: 80,
      isClicked: "false",
    },
    {
      mainColor: "bg-fuchsia-800",
      secondaryColor: "bg-fuchsia-400",
      title: "Madara Uchiwa",
      imgSrc: madara,
      key: 9,
      number: 9,
      index: 90,
      isClicked: "false",
    },
    {
      mainColor: "bg-teal-800",
      secondaryColor: "bg-teal-500",
      title: "Tsunade Senju",
      imgSrc: tsunade,
      key: 10,
      number: 10,
      index: 100,
      isClicked: "false",
    },
    {
      mainColor: "bg-yellow-500",
      secondaryColor: "bg-yellow-200",
      title: "Minato Namikaze",
      imgSrc: minato,
      key: 11,
      number: 11,
      index: 110,
      isClicked: "false",
    },
    {
      mainColor: "bg-red-600",
      secondaryColor: "bg-red-300",
      title: "Oroshimaru of the Sanin",
      imgSrc: oroshimaru,
      key: 12,
      number: 12,
      index: 120,
      isClicked: "false",
    },
  ]);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const initialSortMount = () => {
    const RandomCardArray = cardArray.map((card) => {
      return {
        mainColor: card.mainColor,
        secondaryColor: card.secondaryColor,
        title: card.title,
        isClicked: card.isClicked,
        imgSrc: card.imgSrc,
        key: card.key,
        number: card.number,
        index: Math.floor(Math.random() * 120 + 1),
      };
    });

    const sortedRandomArray = RandomCardArray.sort(function (cardA, cardB) {
      if (cardA.index < cardB.index) {
        return 1;
      } else {
        return -1;
      }
    });

    const reverseRandomArray = sortedRandomArray.reverse();

    setCardArray(reverseRandomArray);
  };

  const sortArrayUpdateScore = (e) => {
    const RandomCardArray = cardArray.map((card) => {
      return {
        mainColor: card.mainColor,
        secondaryColor: card.secondaryColor,
        title: card.title,
        imgSrc: card.imgSrc,
        key: card.key,
        isClicked: card.isClicked,
        number: card.number,
        index: Math.floor(Math.random() * 120 + 1),
      };
    });

    const sortedRandomArray = RandomCardArray.sort(function (cardA, cardB) {
      if (cardA.index < cardB.index) {
        return 1;
      } else {
        return -1;
      }
    });

    const reverseRandomArray = sortedRandomArray.reverse();

    const finalArray = reverseRandomArray.map((card) => {
      if (card.number == e.target.attributes.number.nodeValue) {
        return {
          mainColor: card.mainColor,
          secondaryColor: card.secondaryColor,
          title: card.title,
          imgSrc: card.imgSrc,
          key: card.key,
          isClicked: "true",
          number: card.number,
          index: Math.floor(Math.random() * 120 + 1),
        };
      } else {
        return card;
      }
    });

    const finalFalseArray = reverseRandomArray.map((card) => {
      return {
        mainColor: card.mainColor,
        secondaryColor: card.secondaryColor,
        title: card.title,
        imgSrc: card.imgSrc,
        key: card.key,
        isClicked: "false",
        number: card.number,
        index: Math.floor(Math.random() * 120 + 1),
      };
    });

    if (e.target.id == "true") {
      setCardArray(finalFalseArray);
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    } else {
      setCardArray(finalArray);
      setScore(score + 1);
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-900 font-roboto">
      {/* Header */}
      <Header myScore={score} myHighScore={highScore} />

      {/* Card Section */}
      <div className="grid gap-4 grid-cols-3 grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 h-[70%] px-10 py-4 mb-14">
        {cardArray.map((card) => {
          return (
            <Card
              key={card.key}
              bgMainColor={card.mainColor}
              bgSecondaryColor={card.secondaryColor}
              cardTitle={card.title}
              myImg={card.imgSrc}
              index={card.index}
              number={card.number}
              clickStatus={card.isClicked}
              myFn={sortArrayUpdateScore}
            />
          );
        })}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
