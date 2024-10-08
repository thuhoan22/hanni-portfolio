import { Link } from "react-router-dom";

const blogList = [
  {
    id: 1,
    time: 'April 12, 2023',
    title: 'How to use Swiper and Slick on the responsive web',
    url: '/blog-detail/1'
  },
  {
    id: 2,
    time: 'Oct 08, 2024',
    title: 'Google search tips for web developers',
    url: '/blog-detail/two'
  },
  {
    id: 3,
    time: 'April 12, 2023',
    title: 'Skills and tools for efficient web design',
    url: '/blog-detail/two'
  },
  {
    id: 4,
    time: 'April 12, 2023',
    title: 'How to use python for web scraping'
  },
  {
    id: 5,
    time: 'April 12, 2023',
    title: 'Best wireframe tools for web designers'
  },
  {
    id: 6,
    time: 'April 12, 2023',
    title: 'Best wireframe tools for web designers'
  }
]

export default function Blog() {
  return (
    <ul className="blog-list">
      {blogList.map((item, index) => (
        <li className="blog-item" key={index}>
          <div className="item-time">
            <span className="icon-calendar"></span>
            <span className="value">{item.time}</span>
          </div>
          <div className="item-text">
            <Link to={item.url || ""} className="link-text">
              <span>{item.title}</span>
            </Link>
            <Link to={item.url || ""} className="link-button">
              Learn More
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
