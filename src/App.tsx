import {createRef, useState} from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Card from './components/card';
import { aboutMe, aspirations, careerJourneys, interests, menuItems, projects, projectsTwo, skills, standOutFacts, technologies, values } from './data_two';
import List from './components/list';
import Chart from './components/chart';
import TextBox from './components/text_box';
import Box from './components/box';
import { styled } from 'styled-components';
import { FaArrowDown } from "react-icons/fa";
import ImageComponent from './components/image';
import Footer from './components/footer';
import { device } from './media_queries';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  &:hover {
    cursor: pointer;
  }

  @media ${device.md} {
    // width: 100%;
    width: 100vw;
  }
`;

const MenuSection = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  margin: 5rem 10rem;
`;

const MenuItem = styled.div`
  flex-basis: 33%;
  display: flex;

  @media ${device.md} {
    flex-basis: 100%;
    display: flex;
  }
`;

const Section = styled.div<{ $primary?: boolean; }>`
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${props => props.$primary ? "0" : "10rem 0"};

  @media ${device.md} {
    display: flex;
    // width: 100%;
    width: 100vw;
  }
`;


const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;

  @media ${device.md} {
    flex-direction: column;
  }
`;

const CardWrapperTwo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
  width: 100%;

`;


function App() {
  const firstDivRef = createRef<HTMLDivElement>();
  const secondDivRef = createRef<HTMLDivElement>();
  const thirdDivRef = createRef<HTMLDivElement>();
  const fourthDivRef = createRef<HTMLDivElement>();
  const fifthDivRef = createRef<HTMLDivElement>();
  const sixthDivRef = createRef<HTMLDivElement>();
  const sevethDivRef = createRef<HTMLDivElement>();
  const eightDivRef = createRef<HTMLDivElement>();

  const [selectedSkillLabel, setSelectedSkillLabel] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  function onHandleSkillsIndex(clickedIndex: number): void {
    setSelectedSkillLabel(skills[clickedIndex]?.skill || '');
    setSelectedExperience(skills[clickedIndex]?.experience || '');
  }

  function handleScroll(divRef: string) {
    switch (divRef) {
      case 'firstDivRef':
        firstDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'secondDivRef':
        secondDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'thirdDivRef':
        thirdDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'fourthDivRef':
        fourthDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'fifthDivRef':
        fifthDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'sixthDivRef':
        sixthDivRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        break;
      case 'sevethDivRef':
        sevethDivRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
          break;
      case 'eightDivRef':
        eightDivRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
          break;
      default:
        break;
    }
  }

  return (
    <>
      <MenuWrapper>
        <Header title="James T" type="header" />
        <Header title="Full Stack Development Meets Data Science & AI :)" type="subheader" />
        {/* <strong>Looking for a React and Python Developer job</strong> */}
        <strong>Clearance Status: Security Clearance</strong>
        <strong>British Citizen</strong>
        <strong>environmentallyconsciouscoder@gmail.com</strong>
        <MenuSection>
          {menuItems.map((data, index) => (
            <MenuItem>
              <Menu
                title={data.title}
                description={data.description}
                icon={data.icon}
                index={index}
                divRef={data.divRef}
                onClick={handleScroll}
              />
            </MenuItem>
          ))}
        </MenuSection>
      </MenuWrapper>


      <div>

      <Section ref={firstDivRef} $primary>
        <Header title="My Technical Stack" type="header" />
        {technologies.map((data) => (
          <div style={{marginBottom: '1rem', display: "flex", justifyContent: "center", width: '100%'}}>
            <TextBox flexDirection="row">
              <div style={{ margin: '1rem', height: '100%'}}>
                <Box>
                    <Header title={data.title} type="subheader" />
                </Box>
              </div>
              <div style={{ height: '100%', display: "flex", alignItems: "center"}}>
                <Box>
                  <div style={{padding: "1rem"}}>
                    {data.technologies.join(', ')}
                  </div>
                </Box>
              </div>
            </TextBox>
          </div>
        ))}
      </Section>

      <Section
        ref={secondDivRef}
      >
        <Header title="Work Experiences" type="header" />
              {projects.map((data) => (
                <div style={{display: "flex", justifyContent: "center", marginTop: "1rem", width: "100%"}}>
                  <TextBox>
                  <Box>
                      <Header title={data.name} type="subheader" />
                  </Box>
                  <div style={{display: "flex", justifyContent: "space-between", margin: "1rem 0"}}>
                    <Box>
                      <div style={{padding: '1rem'}}><b>Key Skills:</b> {data.skills.join(', ')}</div>
                      <div style={{padding: '0 0 1rem 1rem'}}>
                        <a href={data.link} target="_blank" rel="noopener noreferrer">website</a>
                      </div>
                    </Box>
                    <Box>
                      <ImageComponent image={data.image}></ImageComponent>
                    </Box>
                  </div>
                  <div>
                    <Box>
                      <div style={{padding: '1rem'}}>{data.description}</div>
                    </Box>
                  </div>
                </TextBox>
                </div>
              ))}
      </Section>

      <Section
        ref={thirdDivRef}
      >
        <Header title="Data Science & ML Projects" type="header" />
        {projectsTwo.map((data) => (
                <div style={{display: "flex", justifyContent: "center", marginTop: "1rem", width: "100%"}}>
                  <TextBox>
                  <Box>
                      <Header title={data.name} type="subheader" />
                  </Box>
                  <div style={{display: "flex", justifyContent: "space-between", margin: "1rem 0"}}>
                    <Box>
                      <div style={{padding: '1rem'}}><b>Key Skills:</b> {data.skills.join(', ')}</div>
                      <div style={{padding: '0 0 1rem 1rem'}}>
                        {data.link && <a href={data.link} target="_blank" rel="noopener noreferrer">website</a>}
                      </div>
                    </Box>
                    <Box>
                      <ImageComponent image={data.image}></ImageComponent>
                    </Box>
                  </div>
                  <div>
                    <Box>
                      <div style={{padding: '1rem'}}>{data.description}</div>
                    </Box>
                  </div>
                </TextBox>
                </div>
              ))}
      </Section>

      <Section
          ref={fourthDivRef}
        >
          <Header title="Click to read about my skill:" type="header" />
          <Chart setSkillIndex={onHandleSkillsIndex} />
          <TextBox flexDirection="row">
            <div style={{ width: '50%', margin: '1rem'}}>
              <Box>
                <Header title={selectedSkillLabel} type="subheader" />
              </Box>
            <div style={{ margin: '1rem'}}>
              {selectedExperience}
            </div>
            </div>
          </TextBox>
      </Section>

      <Section
          ref={fifthDivRef}
        >
          <Header title="About Me" type="header" />
          <Header title="My story so far..." type="subheader" />
          <List text={aboutMe} />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: '0 10rem', marginBottom: '2rem'}}>
            <Header title="My life outside of tech" type="subheader" />
            <CardWrapper>
              {interests.map((data, index) => (
                <Card title={data.title} description={data.discription} icon={data.icon} image={data.image} index={index} />
              ))}
            </CardWrapper>
          </div>
          <Header title="What makes me stand out?" type="subheader" />
          <List text={standOutFacts} />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: '0 10rem'}}>
            <Header title="I especially value..." type="subheader" />
            <CardWrapper>
              {values.map((data, index) => (
                <Card title={data.title} description={data.discription} icon={data.icon} image={data.image} index={index} />
              ))}
            </CardWrapper>
          </div>
        </Section>

        <Section
          ref={sixthDivRef}
        >
          <Header title="This is my Career Journey so far:" type="header" />
          <div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            </div>
            <div style={{display: "flex", height: "100%", flexWrap: "wrap", justifyContent: "center"}}>
              {careerJourneys.map((data) => (
              <CardWrapperTwo>
                <Header title={data.heading} type="subheader" />
                <TextBox backgroundColor="rgb(244 114 182)" flexDirection="row">
                    {data.information.map((data, index) => (
                      <div style={{display:"flex", width: "50%", justifyContent: "center", margin: "1rem"}}>
                        <TextBox backgroundColor="rgb(233 213 255)" flexDirection="column">
                          <Card title={data.title} description={data.description} icon={""} image={""} index={index} />
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", flexDirection: "column"}}>
                            <FaArrowDown />
                          </div>
                        </TextBox>
                      </div>
                    ))}
                </TextBox>
              </CardWrapperTwo>
              ))}
            </div>
          </div>
        </Section>

      </div>


      <Section
        ref={sevethDivRef}
      >
        <Header title="Aspirations" type="header" />
        <div style={{marginTop:'1rem', display: "flex", justifyContent: "center"}}>
          <TextBox>
            <Box>
              <div style={{padding: '1rem'}}>
                {aspirations}
              </div>
            </Box>
          </TextBox>
        </div>
      </Section>

      <Section
        ref={eightDivRef}
      >
        <Footer/>
      </Section>



    </>
  );
}

export default App;