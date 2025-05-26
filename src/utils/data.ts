import AgeImage1 from "../../public/assets/age/1.png";
import AgeImage2 from "../../public/assets/age/2.png";
import AgeImage3 from "../../public/assets/age/3.png";
import AgeImage4 from "../../public/assets/age/4.png";
import ReadingLevelImage1 from "../../public/assets/reading-level/1.png";
import ReadingLevelImage2 from "../../public/assets/reading-level/2.png";
import ReadingLevelImage3 from "../../public/assets/reading-level/3.png";
import ReadingLevelImage4 from "../../public/assets/reading-level/4.png";
import ReadingTimeImage1 from "../../public/assets/reading-time/1.png";
import ReadingTimeImage2 from "../../public/assets/reading-time/2.png";
import ReadingTimeImage3 from "../../public/assets/reading-time/3.png";
import ReadingTimeImage4 from "../../public/assets/reading-time/4.png";

export const data = [
  {
    question: "How old is your little reader?",
    description:
      "We’ll find stories that perfectly match their curiosity, imagination, and growing skills.",
    options: [
      {
        value: "0-2",
        text: "Baby Explorer",
        image: AgeImage1,
      },
      {
        value: "3-5",
        text: "Tiny Storyteller",
        image: AgeImage2,
      },
      {
        value: "6-8",
        text: "Growing Reader",
        image: AgeImage3,
      },
      {
        value: "9-11",
        text: "Book Adventurer",
        image: AgeImage4,
      },
    ],
  },
  {
    question: "What makes your child light up with excitement?",
    description: "Let’s find books that match their world!",
    options: [
      {
        value: "Animals",
        text: "Animals",
        icon: "🐾",
      },
      {
        value: "Fairy Tales",
        text: "Fairy Tales",
        icon: "🧚‍♀️",
      },
      {
        value: "Science & STEM",
        text: "Science & STEM",
        icon: "🔬",
      },
      {
        value: "Adventures",
        text: "Adventures",
        icon: "🌍",
      },
      {
        value: "Sports",
        text: "Sports",
        icon: "⚽",
      },
      {
        value: "Fiction",
        text: "Fiction",
        icon: "📚",
      },
      {
        value: "History",
        text: "History",
        icon: "🏛️",
      },
      {
        value: "Others",
        text: "Others",
        icon: "🎨",
      },
    ],
  },
  {
    question: "Which types of characters does your child love most?",
    options: [
      {
        value: "Funny Animals",
        text: "Funny Animals",
        icon: "🦊",
      },
      {
        value: "Brave Heroes",
        text: "Brave Heroes",
        icon: "🦸‍♀️",
      },
      {
        value: "Magical Creatures",
        text: "Magical Creatures",
        icon: "🧙",
      },
      {
        value: "Cars and Trucks",
        text: "Cars and Trucks",
        icon: "🚔",
      },
      {
        value: "Historical Figures",
        text: "Historical Figures",
        icon: "📜",
      },
    ],
  },
  {
    question: "What’s your child’s current reading level?",
    options: [
      {
        value: "Beginner",
        text: "Beginner",
        image: ReadingLevelImage1,
      },
      {
        value: "Learner",
        text: "Learner",
        image: ReadingLevelImage2,
      },
      {
        value: "Intermediate",
        text: "Intermediate",
        image: ReadingLevelImage3,
      },
      {
        value: "Advanced",
        text: "Advanced",
        image: ReadingLevelImage4,
      },
    ],
  },
  {
    question: "How does your child prefer to enjoy stories?",
    options: [
      {
        value: "Listen to Audiobooks",
        text: "Listen to Audiobooks",
        icon: "🎧",
      },
      {
        value: "Read with Parents",
        text: "Read with Parents",
        icon: "🗣️",
      },
      {
        value: "Read Along",
        text: "Read Along",
        icon: "📖",
      },
      {
        value: "Independent Reading",
        text: "Independent Reading",
        icon: "🙇",
      },
    ],
  },
  {
    question: "What other activities or hobbies does your child enjoy?",
    options: [
      {
        value: "Drawing and Arts",
        text: "Drawing and Arts",
        icon: "🎨",
      },
      {
        value: "Science Experiments",
        text: "Science Experiments",
        icon: "🧪",
      },
      {
        value: "Sports and Outdoor Play",
        text: "Sports and Outdoor Play",
        icon: "⚽",
      },
      {
        value: "Music and Singing",
        text: "Music and Singing",
        icon: "🎶",
      },
    ],
  },
  {
    question: "When does your little reader love storytime the most?",
    description: "We’ll recommend books to match their rhythm.",
    options: [
      {
        value: "Morning",
        text: "Morning",
        image: ReadingTimeImage1,
      },
      {
        value: "Afternoon",
        text: "Afternoon",
        image: ReadingTimeImage2,
      },
      {
        value: "Bedtime",
        text: "Bedtime",
        image: ReadingTimeImage3,
      },
      {
        value: "Roadtrip",
        text: "Roadtrip",
        image: ReadingTimeImage4,
      },
    ],
  },
  {
    question: "How do you want your child to feel while reading?",
    description: "We’ll choose stories that make the experience magical.",
    options: [
      {
        value: "Uplifting and Positive",
        text: "Uplifting and Positive",
        icon: "🌟",
      },
      {
        value: "Inspiring and Motivational",
        text: "Inspiring and Motivational",
        icon: "🏆",
      },
      {
        value: "Comforting and Soothing",
        text: "Comforting and Soothing",
        icon: "🌻",
      },
      {
        value: "Exciting and Adventurous",
        text: "Exciting and Adventurous",
        icon: "🌪️",
      },
    ],
  },
];
