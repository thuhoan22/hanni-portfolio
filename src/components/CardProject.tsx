import { Link } from "react-router-dom";
// import ImgProject1 from "assets/img/img-project-01.jpg";

export interface CardProps {
  id: number;
  thumb: string;
  name: string;
  category: number;
}

export default function CardProject({ id, thumb, name, category }: CardProps) {
  return (
    <Link to={`/project/${id}`} className="card">
      <div className="card-thumb">
        <img src={thumb} alt="" />
      </div>
      <div className="card-info">
        <span className="category">{category}</span>
        <strong className="name">{name}</strong>
      </div>
    </Link>
  );
}
