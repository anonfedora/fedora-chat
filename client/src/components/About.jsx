import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h4>About</h4>
          <div className="paragraphs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              odit necessitatibus nulla eum omnis voluptatem fuga quasi quis?
              Voluptates ducimus similique sunt, consequuntur, in autem neque
              provident dolores dolor eaque asperiores consequatur minus? Quae,
              quis quod itaque officiis facilis debitis rem suscipit veritatis
              ullam id ducimus praesentium eos. Sapiente, nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              numquam perferendis amet corporis harum? Vel, tenetur? Sed
              incidunt dignissimos numquam molestiae nobis porro. Unde
              reprehenderit sunt vel? Dolor, quas qui facilis repellendus
              mollitia ipsa, exercitationem maxime molestiae, ea aliquam
              reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
              rerum recusandae eligendi, quo alias culpa. Officia blanditiis
              debitis eaque quia! Exercitationem, ad. Aspernatur nisi, similique
              cum exercitationem eligendi aut nulla est. Nesciunt aspernatur non
              vero, inventore incidunt minus nihil!
            </p>
          </div>
          <div className="to__chat">
            <Link to="/chat">
              {" "}
              <h3>Back to Chat</h3>{" "}
            </Link>
          </div>
          chat
        </div>
      </div>
    </>
  );
};

export default About;
