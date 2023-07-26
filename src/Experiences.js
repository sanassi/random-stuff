import Experience from "./Experience";

export default function Experiences() {
  return (
    <div>
      <label className='experience-label'>Experience</label>
      <div id='experiences' className="experiences">
        <Experience duration={{'start' : 'Jan. 2024', 'end' : 'July 2024'}}
                    title='Teaching Assistant (YAKA)'
                    description={['']}
                    company='Epita'
                    techs={['Java', 'C++']}/>
        <Experience duration={{'start' : 'Sept. 2023', 'end' : 'Jan. 2024'}}
                    title='Backend Developer Intern'
                    description={['']}
                    company='Rakuten France'
                    techs={['Java']}/>
        <Experience duration={{'start' : 'Sept. 2022', 'end' : 'July 2023'}}
                    title='Teaching Assistant (ACDC)'
                    description={['Teaching Computer Science and Programming to first year students.',
                      'Writing, testing and deploying weekly programming practicals for students in C#']}
                    company='Epita Paris'
                    techs={['C#']}/>
      </div>
    </div>
  );
};