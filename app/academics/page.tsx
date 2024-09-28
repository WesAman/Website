import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my academics</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Exploring my passion to explore life and {' '}
          <Link href="/blog/developer-experience">solve problems</Link> along the
          way. I love to learn and turn those experiences into a teaching or leadership opportunity for problem solvers like myself. Here's a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">International Collegiate Programming Contest Competitetor</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          [Computer Science]  • Team Lead
        </p>
        <p>
          I joined <a href="https://icpc.global/">ICPC</a> in my junior year of university to grow{' '}
          and exercise <a href="https://github.com/WesAman">my programming abilities</a>. It was mostly for fun and to surround myself with interesting folks.
        </p>
        <ul>
          <li>
            In 2023, I was promoted to Team Lead. 
            We placed 7th overall in division 2 standings, a 6 place improvement from the year before.
{' '}
            <img src = "https://i.imgur.com/qacj9cE.jpeg">

            </img>
           
          </li>
          
         
        </ul>
        <p>
       Since joining the programming team, not only my programming skills improved, but my team-building experience and impactful communication skills have never before been more 
          significant.
    
        <img src = "https://i.imgur.com/Uk32dr7.jpeg"></img>
       
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter"> Hybrid Rocketry Research</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
         [Engineering] • Undergraduate Research Assistant , 2022 — 2022
        </p>
        <p>
       <b>•[ ITAR Compliant ]•</b>
        <br></br>
        • One of three students tapped to join faculty-led research project predicting and analyzing hybrid-rocket fuel performances.
        <br></br>
        • Manufactured and collected performance data from 36 different paraffin-based environmentally sustainable fuel formulations with NOx.
<br></br>
        • Calculated regression rates and rocket motor classification from research data.
         <br></br>
         <br></br>
         The most impressive achievement in my career thus far was spearheading a hybrid rocketry project that required me to rapidly master a
         completely new domain of rocket science within just 5-7 weeks. This project involved designing, manufacturing, and 
         conducting experiments on hybrid rocket engines—a complex challenge given their significant differences from the 
         solid rocket engines I was familiar with, especially in terms of engineering approaches and safety considerations. 
         

    <br>
    </br>
        <br></br>
            • Rocket gif/video     <a href="https://i.imgur.com/vMWeRpj.mp4" target="_blank" className="video-link">Watch the Rocket Video (Static Test)</a>
            <br></br>


            • Rocket Picture of some graphs?         <img src = "https://i.imgur.com/kcoJ4Uo.png"></img>
            • Rocket Picture of the fuel cell        <img src = "https://i.imgur.com/pzW6KXo.jpeg"></img>
            • Rocket Picture of the fuel cell        <img src = "https://i.imgur.com/4S7JQjS.png"></img>
            
        
    
    <br></br>
        By diving deep into hybrid technology,
        I successfully led a team of 2 to design a rocket engine that not only met but exceeded our experimental objectives,
        culminating in a research paper that contributed valuable insights to the field of hybrid rocket engines by focusing on a fuel that 
        is environentally sustainable. This project not only 
        demonstrated my technical capabilities but also highlighted my adaptability and rapid learning skills, 
        showcasing my ability to achieve high-stakes goals under tight deadlines.
        
        
        </p>
        
        
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Experimental Rocketry - Solid Rocket Engines</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          [Engineering] • Project Lead , 2020 — 2022
        </p>
        <p>
            I love teamwork, mentorship, problems solving, experimentation, persuasion, and every once in a while just licking the stamp and sending it.
            This was truly a once in a lifetime experience that I will always reflect upon.
            One of the most impressive achievements in my career was my role as Project Lead with the Mt. San Antonio Rocket Team.
            In this position, I oversaw the design and manufacturing of experimental one and two-stage solid rocket engines,
            achieving unprecedented altitudes of 10,000 and 30,000 feet. 
            This project was not only technically demanding but also operated under strict budget constraints.
            <br></br><br></br>
            Despite the financial limitations, my leadership and strategic planning led to a reduction
            of the project's total costs by 75% from the allocated $20,000 budget. 
            My approach involved optimizing resource allocation, enhancing design 
            efficiencies, and securing increased funding through meticulously prepared proposals.
            This project showcased my ability to lead complex engineering tasks, manage significant budgetary 
            responsibilities, and drive advancements in experimental rocketry for the college.
            <br></br>
            • Rocket Picture (me)       <img src = "https://i.imgur.com/6EY35nS.jpeg"></img>
            <br></br>
            • Static Test Assembly        <img src = "https://i.imgur.com/L6FGQZS.jpeg"></img>
            <br></br>
            • Rocket Picture of the fuel cell        <img src = "https://i.imgur.com/ZRcwUCL.jpeg"></img>
            <br></br>
            • Static Test - Post Test        <img src = "https://i.imgur.com/UfjufAL.jpeg"></img>


        </p>
      </div>
    </section>
  );
}
