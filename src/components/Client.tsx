export interface ClientProps {
  id: number;
  avt: string;
  name: string;
  position: string;
  review: string;
}

export default function Client({ id, avt, name, position, review }: ClientProps) {
  return (
    <div className="client-info">
      <p className="text-review">{review}</p>
      <div className="personal-info">
        <div className="avata-name">
          <span className="avata">
            <img src={avt} alt="" />
          </span>
          <strong className="name">{name}</strong>
        </div>
        <span className="position">{position}</span>
      </div>
    </div>
  );
}
