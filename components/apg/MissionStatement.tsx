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
    <div className="center-body center-styl top-gap">
      <h1>
        {title}
      </h1>

      <p>{shortDescription}</p>
    </div>
  );
}