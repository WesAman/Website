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
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          plenty of people in life have told me im pretty lucky. i never understood why that was until i reached my twenties.
           upon sharing this exerience with many of my life mentors, they all similarily told me that luck is spelled <b>'W' 'O' 'R' 'K'</b>. it just so happens i love to <Link href="/blog/developer-experience">solve problems</Link>  that arise in the areas i work. {' '}
          
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Wes' Whips</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          [Sales]  • Owner, 2018 — 2024
        </p>
        <p>
        inspired by my father's ethos to always stay industrious through either passive or active income streams,
        my journey began as a young man. i would scour craigslist and scan busy city streets for cars adorned with "For Sale"
         signs. 
         emulating my father's knack for seizing every possible deal and infusing my own unique approach, i ventured into the world of car flipping.

        <br></br><br></br>surprisingly, despite living in various parts of southern california, the car flipping community remained relatively niche.
         this didn’t deter me; instead, i established a robust network of auctioneers, fellow flippers, and enthusiasts who preferred cash transactions.
          my connections grew to include passionate project undertakers and even notable figures such as a 
           former tech CEO, prominent youtube creators, and the son of a renowned musician.
           <br></br>
          <br></br>
         
        </p>
        <ul>
          <li>
          the vehicles i was able make some significant wins on.
          {' '}
          
            <img src = "https://i.postimg.cc/wMJVCrK2/IMG-0958.jpg"></img>

            <img src = "https://i.postimg.cc/L61B5wb3/IMG-4600.jpg"></img>

            <img src = "https://i.postimg.cc/3wRZ8N5d/IMG-1029.jpg"></img>
            <img src = "https://i.imgur.com/Bl0VEAf.png"></img>
            <img src = "https://i.postimg.cc/4ywP59pb/IMG-6481.jpg"></img>

            <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
            </a>{' '}
           
          </li>
          <li>in summary i:
<br></br>
• founded a local enterprise focused on buying and selling used cars.
<br></br>
• developed a reliable network of buyers and sellers leveraging major online platforms.
<br></br>
• managed and grew a portfolio to $320k in closed sales volume, facilitating transactions that often exceeded $100k.
<br></br><br></br>
this endeavor was not just about transactions but about crafting stories and opportunities from each vehicle that passed through my hands.
{/* 
            In 2022, I was promoted to VP of Developer Experience, now also
            leading our product documentation team. My team created a{' '}
            <a href="https://nextjs.org/learn">new free course</a> to teach
            Next.js, which had 17 million page views that year.{' '}
            <a href="https://twitter.com/leeerob/status/1608900031859527682">
              I shipped.
            </a>{' '}
            I partnered with our open-source community, collaborating with
            frameworks like{' '}
            <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{' '}
            <a href="https://astro.build/blog/vercel-official-hosting-partner/">
              Astro
            </a>{' '}
            and sponsoring individuals and projects. */}
          </li>
        </ul>
        <p>
          {/* Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with <Stars />. It's used by Walmart, ChatGPT, Starbucks, Okta,
          Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>. */}
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Overflow Events</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        [Sales] • Account Executive / Project Manager, 2019 — 2020
        </p>
        <p>
        In 2019 I started a company with some friends involving nightlife, music, and entertainment. 
            Leveraging years of behind-the-bar observations at nightclubs and rave scense, I witnessed
             the highs and lows of event promotion firsthand. This unique vantage point equiiped me
             with valuable insights into what truly makes or breaks a successful event. Motivated to
             apply these lessons, I launched Overflow Events, a venture from both observation and aspiration.

          <br>
          </br>
            There are a ton of pitfalls to fall into, my success in the industryb was due to me preemptively tackling
            challenes by implementing strategies that I had seen succeed and steered clear of issues that tripped
            up others. My proactive approaches meant that when problems arose, they were swiftly managed using solutions
            I had already seen in action.

            <br></br>
            <br></br>
            I am proud to say that Overflow Events thrived, generating substantial revenue and consistently drawing large crowds
            My success was not by chance-- it was by design, backed by solid metrics and a deep understanding of the event landscape.

        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vans Skate Shop</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        [Sales] • Sales Associate 2018 — 2019
        </p>
        <p>
        • Achieved Sales Associate of the month 5x by meeting and exceeding the daily/weekly/monthly sale goals.
        <br></br>
        • Generated reports to analyze and improve sales of team members to optimize daily sale goals.
        <br></br>
        • Assisting customers in a manner to ensure their needs while leveraging high customer satisfaction.
        <br></br>
        • Engaged with managers and supervisors to raise awareness among diverse demographics, using direct marketing
        on social media platforms like Instagram and Facebook to increase foot traffic during seasonal or sales events.
        <br></br>
        </p>
      </div>
    </section>
  );
}
