import ecommerce from "../public/ecommerce.svg";

export default function About() {
  return (
    <div className="about-page">
      <div className="about">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          corporis laboriosam temporibus eveniet, cupiditate culpa, optio vero
          quis nam fugiat molestiae eum eligendi, cum nulla quidem nesciunt
          saepe praesentium accusamus! Dolores at non excepturi cumque repellat
          et, provident assumenda dicta ullam asperiores facere, consectetur
          odit fugiat, quae soluta neque? Rerum ex illum soluta, corporis
          consequatur iure hic odio voluptatibus illo.
        </p>
      </div>
      <img src={ecommerce} alt="" />
    </div>
  );
}
