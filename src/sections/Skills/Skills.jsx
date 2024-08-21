import HTML from '../../assets/html.svg';
import CSS from '../../assets/css.svg';
import JS from '../../assets/js.svg';
import React from '../../assets/react.svg';
import Canva from '../../assets/canva.svg';
import Figma from '../../assets/figma.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import VScode from '../../assets/vscode.svg';
import Python from '../../assets/python.svg';
import Linux from '../../assets/linux.svg';
import Java from '../../assets/java.svg';

function Skills() {

  return (
    <section id="skills">
      <h1 class="skills">Skills</h1>
      <div className="wrapper">
  <div class="item item1">
    <img src={HTML} />
  </div>
  <div class="item item2">
    <img src={Canva} />
  </div>
  <div class="item item3">
    <img src={JS} />
  </div>
  <div class="item item4">
    <img src={React} />
  </div>
  <div class="item item5">
    <img src={CSS} />
  </div>
  <div class="item item6">
    <img src={Figma} />
  </div>
  <div class="item item7">
    <img src={Bootstrap} />
  </div>
  <div class="item item8">
    <img src={Java} />
  </div>
  <div class="item item9">
    <img src={VScode} />
  </div>
  <div class="item item10">
    <img src={Python} />
  </div>
  <div class="item item11">
    <img src={Linux} />
    </div>
</div>
  </section>
  );
}

export default Skills;
