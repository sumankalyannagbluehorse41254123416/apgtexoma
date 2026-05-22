// components/apg/MissionStatement.tsx

interface MissionStatementProps {
  title: string;
  shortDescription: string;
}

export default function MissionStatement({
  title,
  shortDescription,
}: MissionStatementProps) {
  return (
    <div className="apg_content">
      <div className="center-body center-styl top-gap ">
        <h1>
          {title}
        </h1>
      </div>
      <div style={{background:"#f8f8f8", padding:"25px 0 40px"}}>
        <div className="container">
          <p>{shortDescription}</p>
        </div>
      </div>
    </div >
  );
}