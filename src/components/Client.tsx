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
        <div className="box-info">
          <span className="avata">
            <img src={avt} alt="" />
          </span>
          <div className="info">
            <strong className="name">{name}</strong>
            <span className="position">{position}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
