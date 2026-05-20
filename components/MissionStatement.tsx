interface MissionStatementProps {
  title: string;
  shortDescription: string;
}

export default function MissionStatement({
  title,
  shortDescription,
}: MissionStatementProps) {
  return (
    <div className="center-body center-styl top-gap top-gap">
      <h1>{title}</h1>
    {/* <div className="center-body center-styl top-gap top-gap">
      <h1>
        <a href="#">
          MISSIO<span>N STA</span>TEMENT
        </a>
      </h1> */}

      <p>{shortDescription}</p>
    </div>
  );
}