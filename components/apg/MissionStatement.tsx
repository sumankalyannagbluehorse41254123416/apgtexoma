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

        <div style={{ padding: "25px 0 0px" }}>
          <div className="">
            <p>{shortDescription}</p>
          </div>
        </div>
      </div>
    </div >
  );
}