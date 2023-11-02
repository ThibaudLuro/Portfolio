export default function SplitParagraphs(text: string){
    return (
      <>
        {text.split('<br/><br/>').map((paragraph, index) => (
          <p key={index} className={"my-4"}>
            {paragraph}
          </p>
        ))}
      </>
    );
  };
  