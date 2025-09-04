import { Card } from "./Card";

const FeedbackSystem = () => {
  
  // Help links: 
  // https://www.educative.io/answers/how-to-implement-a-component-loop-in-react
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map

  const titles = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing"
  ];

   return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {titles.map((title, index) => (
          <Card 
          key={title} 
          title={title} 
          index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;


